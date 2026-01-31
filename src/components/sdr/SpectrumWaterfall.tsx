import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { createProgram, resizeCanvas } from './gl-utils';
import { SPECTRUM_VS, SPECTRUM_FS, SPECTRUM_FILL_VS, SPECTRUM_FILL_FS, WATERFALL_VS, WATERFALL_FS } from './shaders';
import { generateColorMap } from './colormaps';
import { useDbTicks, useFrequencyTicks } from './axis-utils';

export interface SpectrumData {
    frequency: number;
    bandwidth: number;
    time: number; // Required now
    seq?: number; // Optional sequence number
    fftBins: Float32Array;
}

export interface SpectrumWaterfallProps {
    data: SpectrumData;
    refLevel?: number;
    displayRange?: number;
    averaging?: number;
    showPeakHold?: boolean;
    colorMap?: string;
    className?: string;
    targetRate?: number; // Target lines per second, default 50
    jitterBufferMs?: number; // Buffer depth in ms, default 200
}

export const SpectrumWaterfall: React.FC<SpectrumWaterfallProps> = ({
    data,
    refLevel = 0,
    displayRange = 80,
    averaging = 0.5,
    showPeakHold = false,
    colorMap = 'turbo',
    className,
    targetRate = 50,
    jitterBufferMs = 200,
}) => {
    const { frequency: centerFrequency, bandwidth } = data;
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const rafRef = useRef<number | null>(null);

    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    // Axis Hooks
    const freqTicks = useFrequencyTicks(centerFrequency, bandwidth, dimensions.width);
    const spectrumHeight = dimensions.height * 0.34;
    const dbTicks = useDbTicks(refLevel, displayRange, spectrumHeight);

    // Markers
    const [markers, setMarkers] = useState<Array<{ id: number; label: string; rowIndex: number }>>([]);
    const markersRef = useRef<Array<{ id: number; label: string; rowIndex: number }>>([]);
    const markerDomRefs = useRef<Map<number, HTMLDivElement>>(new Map());
    const lastMarkerTime = useRef<number>(0);

    // --- State Refs for WebGL and Logic ---
    const stateRef = useRef({
        // WebGL Resources
        gl: null as WebGL2RenderingContext | null,
        spectrumVao: null as WebGLVertexArrayObject | null,
        waterfallVao: null as WebGLVertexArrayObject | null,
        programSpectrumLine: null as WebGLProgram | null,
        programSpectrumFill: null as WebGLProgram | null,
        programWaterfall: null as WebGLProgram | null,
        waterfallTexture: null as WebGLTexture | null,
        colormapTexture: null as WebGLTexture | null,
        spectrumDataTexture: null as WebGLTexture | null,

        // Data State
        fftSize: 0,
        averagedBins: new Float32Array(0),

        // Waterfall State
        waterfallRow: 0,
        waterfallHeight: 1024, // Increased height for smoother faster scrolling if needed

        // Time-Based Rendering State
        frameQueue: [] as SpectrumData[],
        renderTime: 0, // Current playhead time
        lastRafTime: 0,
        accumulator: 0,

        // Props Cache
        props: { refLevel, displayRange, colorMap, averaging, showPeakHold, targetRate, jitterBufferMs },
    });

    useEffect(() => {
        if (!containerRef.current) return;
        const observer = new ResizeObserver((entries) => {
            for (const entry of entries) {
                setDimensions({
                    width: entry.contentRect.width,
                    height: entry.contentRect.height
                });
            }
        });
        observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    // Update props in ref
    useEffect(() => {
        stateRef.current.props = { refLevel, displayRange, colorMap, averaging, showPeakHold, targetRate, jitterBufferMs };
        const gl = stateRef.current.gl;
        if (gl && stateRef.current.colormapTexture) {
            gl.bindTexture(gl.TEXTURE_2D, stateRef.current.colormapTexture);
            const data = generateColorMap(colorMap as any);
            gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, 256, 1, gl.RGBA, gl.UNSIGNED_BYTE, data);
        }
    }, [refLevel, displayRange, colorMap, averaging, showPeakHold, targetRate, jitterBufferMs]);

    // Data Ingestion: Push to Queue
    useEffect(() => {
        if (!data || !data.fftBins || data.fftBins.length === 0) return;

        const state = stateRef.current;

        // Validate / Init FFT Size
        if (data.fftBins.length !== state.fftSize) {
            state.fftSize = data.fftBins.length;
            state.averagedBins = new Float32Array(data.fftBins);
            // Re-allocate textures if needed? Handled in render loop usually or explicitly here
            // but for simplicity we'll handle resizing in render loop detector
        }

        // Insert into sorted queue
        // Usually data arrives in order, but verify
        const queue = state.frameQueue;

        // Simple optimization: if queue empty or new data is newer than last, push
        if (queue.length === 0 || data.time > queue[queue.length - 1].time) {
            queue.push(data);
        } else {
            // Insert sorted (rare case for simple UDP/WS streams but good for jitter)
            let i = queue.length - 1;
            while (i >= 0 && queue[i].time > data.time) {
                i--;
            }
            queue.splice(i + 1, 0, data);
        }

        // Initialize Render Time if not started
        if (state.renderTime === 0) {
            state.renderTime = data.time - (state.props.jitterBufferMs / 1000);
            // Also reset averaged bins to this first frame
            state.averagedBins.set(data.fftBins);
        }

        // Latency Cap: If queue is too far ahead of renderTime, drop old frames or jump renderTime
        // Ideally we just keep queue length bounded
        const maxQueueSize = Math.ceil(state.props.targetRate * 2); // 2 seconds buffer max
        if (queue.length > maxQueueSize) {
            // Drop oldest
            queue.shift();
            // If we are getting too far behind, bump renderTime
            // renderTime should not be older than queue[0].time - jitterBuffer
            // ... logic is complex, for now simple "keep buffer reasonable"
            if (queue[0].time > state.renderTime + (state.props.jitterBufferMs / 1000) * 2) {
                // We fell waaaay behind? Jump.
                state.renderTime = queue[0].time - (state.props.jitterBufferMs / 1000);
            }
        }

    }, [data]);

    // WebGL Init and Loop
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const gl = canvas.getContext('webgl2', { alpha: false, antialias: false });
        if (!gl) {
            console.error('WebGL 2 not supported');
            return;
        }
        stateRef.current.gl = gl;

        // --- Init Shaders ---
        const pSpecLine = createProgram(gl, SPECTRUM_VS, SPECTRUM_FS);
        const pSpecFill = createProgram(gl, SPECTRUM_FILL_VS, SPECTRUM_FILL_FS);
        const pWaterfall = createProgram(gl, WATERFALL_VS, WATERFALL_FS);

        if (!pSpecLine || !pSpecFill || !pWaterfall) return;

        stateRef.current.programSpectrumLine = pSpecLine;
        stateRef.current.programSpectrumFill = pSpecFill;
        stateRef.current.programWaterfall = pWaterfall;

        // --- Init VAOs ---
        const sVao = gl.createVertexArray();
        stateRef.current.spectrumVao = sVao;

        const wVao = gl.createVertexArray();
        gl.bindVertexArray(wVao);
        // Full screen quad for waterfall shader
        const quadVerts = new Float32Array([-1, -1, 0, 0, 1, -1, 1, 0, -1, 1, 0, 1, -1, 1, 0, 1, 1, -1, 1, 0, 1, 1, 1, 1]);
        const wBuf = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, wBuf);
        gl.bufferData(gl.ARRAY_BUFFER, quadVerts, gl.STATIC_DRAW);

        const locPos = gl.getAttribLocation(pWaterfall, 'a_position');
        const locTex = gl.getAttribLocation(pWaterfall, 'a_texCoord');
        gl.enableVertexAttribArray(locPos);
        gl.vertexAttribPointer(locPos, 2, gl.FLOAT, false, 16, 0);
        gl.enableVertexAttribArray(locTex);
        gl.vertexAttribPointer(locTex, 2, gl.FLOAT, false, 16, 8);

        // --- Init Textures ---
        const extLinear = gl.getExtension('OES_texture_float_linear');
        const filter = extLinear ? gl.LINEAR : gl.NEAREST;

        // Waterfall History Texture
        const wTex = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, wTex);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, filter);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, filter);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
        stateRef.current.waterfallTexture = wTex;

        // Spectrum Data (Current Line) Texture
        const sDataTex = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, sDataTex);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        stateRef.current.spectrumDataTexture = sDataTex;

        // Colormap Texture
        const cmTex = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, cmTex);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 256, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, generateColorMap(stateRef.current.props.colorMap as any));
        stateRef.current.colormapTexture = cmTex;

        let currentFftSize = 0;

        // Render Loop
        const render = (now: number) => {
            const state = stateRef.current;
            const { fftSize, frameQueue } = state;

            // 1. Calculate Delta Time
            if (state.lastRafTime === 0) state.lastRafTime = now;
            const dt = (now - state.lastRafTime) / 1000; // seconds
            state.lastRafTime = now;

            // 2. Add to Accumulator
            state.accumulator += dt;
            const stepTime = 1.0 / state.props.targetRate;

            // 3. Process Logic Steps (Fixed Time Step)
            // Limit max steps to avoid spiral of death
            let steps = 0;
            const maxSteps = 10;

            // Texture resize check needs to be outside loop potentially, or handled carefully
            if (fftSize > 0 && fftSize !== currentFftSize) {
                currentFftSize = fftSize;
                gl.bindTexture(gl.TEXTURE_2D, state.waterfallTexture);
                gl.texImage2D(gl.TEXTURE_2D, 0, gl.R32F, currentFftSize, state.waterfallHeight, 0, gl.RED, gl.FLOAT, null);
                gl.bindTexture(gl.TEXTURE_2D, state.spectrumDataTexture);
                gl.texImage2D(gl.TEXTURE_2D, 0, gl.R32F, currentFftSize, 1, 0, gl.RED, gl.FLOAT, null);
            }

            while (state.accumulator >= stepTime && steps < maxSteps && fftSize > 0) {
                state.accumulator -= stepTime;
                state.renderTime += stepTime;
                steps++;

                // --- Pick Frame Logic ---
                // Find frames around renderTime
                // frameQueue is sorted by time

                // Remove old frames
                while (frameQueue.length > 2 && frameQueue[1].time < state.renderTime) {
                    frameQueue.shift();
                }

                let displayBins: Float32Array | null = null;

                if (frameQueue.length === 0) {
                    // No data? 
                    // displayBins remains null (or noise)
                }
                else if (state.renderTime < frameQueue[0].time) {
                    // We are asking for time BEFORE our buffer? 
                    // Just hold first frame? or blank?
                    displayBins = frameQueue[0].fftBins;
                }
                else if (frameQueue.length === 1) {
                    // Only one frame, hold it
                    displayBins = frameQueue[0].fftBins;
                }
                else {
                    // Interpolate between [0] and [1]
                    const f0 = frameQueue[0];
                    const f1 = frameQueue[1];
                    // renderTime should be between f0.time and f1.time

                    if (state.renderTime >= f1.time) {
                        // Should have been shifted above, but safety fallback
                        displayBins = f1.fftBins;
                    } else {
                        const alpha = (state.renderTime - f0.time) / (f1.time - f0.time);
                        // Clamp alpha 0..1
                        const a = Math.max(0, Math.min(1, alpha));

                        // Perform interpolation
                        // We can't easily alloc a new array every tick (GC churn). 
                        // But JS typed arrays are fast. Let's try simple way first.
                        // Optimization: reuse a temp buffer if needed.
                        const len = fftSize;
                        if (!state.averagedBins || state.averagedBins.length !== len) state.averagedBins = new Float32Array(len);

                        const out = state.averagedBins;
                        const b0 = f0.fftBins;
                        const b1 = f1.fftBins;

                        for (let i = 0; i < len; i++) {
                            out[i] = b0[i] * (1 - a) + b1[i] * a;
                        }
                        displayBins = out;
                    }
                }

                if (displayBins) {
                    // Upload to Waterfall
                    gl.bindTexture(gl.TEXTURE_2D, state.waterfallTexture);
                    gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1);
                    gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, state.waterfallRow, currentFftSize, 1, gl.RED, gl.FLOAT, displayBins);
                    state.waterfallRow = (state.waterfallRow + 1) % state.waterfallHeight;

                    // Also update averagedBins for Main Spectrum view (smoothing handled separately if desired, 
                    // but for this implementation we simply use the interpolated value as the "current" value for the spectrum line)
                    // If we want separate averaging for Spectrum Line (the 'averaging' prop), we should apply that on top.

                    // We already wrote to averagedBins above for interpolation.
                    // If we didn't interpolate (exact frame), we might need to copy.
                    if (displayBins !== state.averagedBins) {
                        state.averagedBins.set(displayBins);
                    }

                    // Apply EMA smoothing for the Spectrum Line view specifically? 
                    // The original code applied EMA to the waterfall bins effectively if they came in fast.
                    // Here, displayBins IS the signal at this time.
                    // We can keep `averagedBins` as the "interpolated instant" value.
                }

                // Markers Check
                const currentTime = state.renderTime * 1000;
                if (currentTime - lastMarkerTime.current > 2000) { // Every 2s
                    const date = new Date(currentTime);
                    const timeStr = date.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
                    const newMarker = { id: currentTime, label: timeStr, rowIndex: state.waterfallRow };

                    const newMarkers = [...markersRef.current, newMarker].slice(-20);
                    markersRef.current = newMarkers;
                    setMarkers(newMarkers);
                    lastMarkerTime.current = currentTime;
                }
            }

            // 4. DRAW
            if (resizeCanvas(canvas)) {
                gl.viewport(0, 0, canvas.width, canvas.height);
            }

            gl.clearColor(0, 0, 0, 1);
            gl.clear(gl.COLOR_BUFFER_BIT);

            if (fftSize === 0) {
                rafRef.current = requestAnimationFrame(render);
                return;
            }

            // Update Spectrum Texture for Line/Fill
            gl.bindTexture(gl.TEXTURE_2D, state.spectrumDataTexture);
            gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, currentFftSize, 1, gl.RED, gl.FLOAT, state.averagedBins);

            const hSplit = Math.floor(canvas.height * 0.66);

            // Draw Waterfall
            gl.viewport(0, 0, canvas.width, hSplit);
            gl.useProgram(state.programWaterfall);
            gl.bindVertexArray(wVao);

            gl.activeTexture(gl.TEXTURE0);
            gl.bindTexture(gl.TEXTURE_2D, state.waterfallTexture);
            gl.uniform1i(gl.getUniformLocation(pWaterfall, 'u_waterfall'), 0);

            gl.activeTexture(gl.TEXTURE1);
            gl.bindTexture(gl.TEXTURE_2D, state.colormapTexture);
            gl.uniform1i(gl.getUniformLocation(pWaterfall, 'u_colormap'), 1);

            const offset = state.waterfallRow / state.waterfallHeight;
            gl.uniform1f(gl.getUniformLocation(pWaterfall, 'u_offset'), offset);
            gl.uniform1f(gl.getUniformLocation(pWaterfall, 'u_minDb'), state.props.refLevel - state.props.displayRange);
            gl.uniform1f(gl.getUniformLocation(pWaterfall, 'u_maxDb'), state.props.refLevel);
            gl.drawArrays(gl.TRIANGLES, 0, 6);

            // Draw Spectrum
            gl.viewport(0, hSplit, canvas.width, canvas.height - hSplit);
            gl.enable(gl.BLEND);
            gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

            // Fill
            gl.useProgram(state.programSpectrumFill);
            gl.bindVertexArray(state.spectrumVao);
            gl.activeTexture(gl.TEXTURE0);
            gl.bindTexture(gl.TEXTURE_2D, state.spectrumDataTexture);
            gl.uniform1i(gl.getUniformLocation(pSpecFill, 'u_data'), 0);
            gl.uniform1f(gl.getUniformLocation(pSpecFill, 'u_bins'), currentFftSize);
            gl.uniform1f(gl.getUniformLocation(pSpecFill, 'u_minDb'), state.props.refLevel - state.props.displayRange);
            gl.uniform1f(gl.getUniformLocation(pSpecFill, 'u_maxDb'), state.props.refLevel);
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, currentFftSize * 2);

            // Line
            gl.useProgram(state.programSpectrumLine);
            gl.bindVertexArray(state.spectrumVao);
            gl.uniform1i(gl.getUniformLocation(pSpecLine, 'u_data'), 0);
            gl.uniform1f(gl.getUniformLocation(pSpecLine, 'u_bins'), currentFftSize);
            gl.uniform1f(gl.getUniformLocation(pSpecLine, 'u_minDb'), state.props.refLevel - state.props.displayRange);
            gl.uniform1f(gl.getUniformLocation(pSpecLine, 'u_maxDb'), state.props.refLevel);
            gl.drawArrays(gl.LINE_STRIP, 0, currentFftSize);
            gl.disable(gl.BLEND);

            // Update Marker DOM positions
            const H = state.waterfallHeight;
            markersRef.current.forEach(m => {
                const el = markerDomRefs.current.get(m.id);
                if (el) {
                    let dist = (state.waterfallRow - m.rowIndex + H) % H;
                    let pct = (dist / H) * 100;
                    el.style.top = `${pct}%`;
                    el.style.opacity = pct > 98 ? '0' : '1';
                }
            });

            rafRef.current = requestAnimationFrame(render);
        };

        rafRef.current = requestAnimationFrame(render);

        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            gl.deleteProgram(pSpecLine);
            gl.deleteProgram(pSpecFill);
            gl.deleteProgram(pWaterfall);
            gl.deleteTexture(stateRef.current.waterfallTexture);
            gl.deleteTexture(stateRef.current.colormapTexture);
            gl.deleteTexture(stateRef.current.spectrumDataTexture);
        };
    }, []);

    const [hoverInfo, setHoverInfo] = React.useState<{ freq: number; db: number; x: number; y: number } | null>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return;
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Simple linear mapping
        const freqStart = centerFrequency - bandwidth / 2;
        const freqPerPixel = bandwidth / rect.width;
        const freq = freqStart + x * freqPerPixel;

        const specHeight = rect.height * 0.34;
        let db = -Infinity;

        if (y < specHeight) {
            const dbRange = displayRange;
            const dbPerPixel = dbRange / specHeight;
            db = refLevel - (y * dbPerPixel);
        }
        setHoverInfo({ freq, db, x, y });
    };

    const handleMouseLeave = () => setHoverInfo(null);

    return (
        <div
            ref={containerRef}
            className={cn('relative w-full h-full bg-black overflow-hidden cursor-crosshair group', className)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <canvas
                ref={canvasRef}
                className="block w-full h-full"
            />
            {/* Same overlays as before */}
            <div
                className="absolute top-0 left-0 right-0 pointer-events-none overflow-hidden"
                style={{ height: '34%' }}
            >
                {dbTicks.map(t => (
                    <div
                        key={t.val}
                        className="absolute left-0 w-full flex items-center group/tick"
                        style={{ top: `${t.percent}%`, transform: 'translateY(-50%)' }}
                    >
                        <div
                            className={cn(
                                "bg-black/60 text-xs text-white/90 px-1 font-mono rounded-r border-l-2 border-white/20 transition-opacity",
                                t.percent > 95 ? "opacity-0" : "opacity-100"
                            )}
                        >
                            {t.val}
                        </div>
                        <div className="w-full h-px bg-white/10" style={{ width: dimensions.width }} />
                    </div>
                ))}
            </div>

            <div
                className="absolute left-0 right-0 h-6 bg-black flex items-center border-y border-white/20 pointer-events-none z-20"
                style={{ top: '34%' }}
            >
                {freqTicks.map(t => (
                    <div
                        key={t.val}
                        className="absolute top-0 h-full flex flex-col justify-center items-center"
                        style={{ left: `${t.percent}%`, transform: 'translateX(-50%)' }}
                    >
                        <span className="relative z-10 text-[10px] text-white font-mono bg-black px-1 whitespace-nowrap">
                            {t.label}
                        </span>
                        <div
                            className="w-px bg-white/10 absolute left-1/2 -translate-x-1/2 pointer-events-none"
                            style={{ height: dimensions.height, top: -spectrumHeight }}
                        />
                    </div>
                ))}
                <div className="absolute top-0 left-1/2 w-0.5 h-[5px] bg-red-500"></div>
            </div>

            <div
                className="absolute left-0 right-0 pointer-events-none overflow-hidden"
                style={{ top: '34%', bottom: 0 }}
            >
                {markers.map(m => (
                    <div
                        key={m.id}
                        ref={el => {
                            if (el) markerDomRefs.current.set(m.id, el);
                            else markerDomRefs.current.delete(m.id);
                        }}
                        className="absolute w-full border-t border-white/20 transition-opacity duration-100"
                        style={{ top: '-10px', opacity: 1 }}
                    >
                        <div className="absolute left-1 -top-3 text-[10px] text-white/70 font-mono bg-black/40 px-1 rounded">
                            {m.label}
                        </div>
                    </div>
                ))}
            </div>

            <div className="absolute top-2 right-2 text-xs text-white/70 font-mono pointer-events-none select-none bg-black/60 p-2 rounded text-right border border-white/10">
                <div className="font-bold text-white">{(centerFrequency / 1e6).toFixed(3)} MHz</div>
                <div className="text-white/50">Span: {(bandwidth / 1e6).toFixed(3)} MHz</div>
            </div>

            {hoverInfo && (
                <div
                    className="absolute pointer-events-none bg-black/90 text-white text-[10px] font-mono p-1 rounded border border-white/20 whitespace-nowrap z-50"
                    style={{
                        left: Math.min(hoverInfo.x + 15, dimensions.width - 120),
                        top: Math.min(hoverInfo.y + 15, dimensions.height - 50)
                    }}
                >
                    <div className="text-yellow-400">{(hoverInfo.freq / 1e6).toFixed(6)} MHz</div>
                    {hoverInfo.db > -1000 && <div className="text-cyan-400">{hoverInfo.db.toFixed(1)} dB</div>}
                </div>
            )}
        </div>
    );
};

