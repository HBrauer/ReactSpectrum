import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { createProgram, resizeCanvas } from './gl-utils';
import { SPECTRUM_VS, SPECTRUM_FS, SPECTRUM_FILL_VS, SPECTRUM_FILL_FS, WATERFALL_VS, WATERFALL_FS } from './shaders';
import { generateColorMap } from './colormaps';
import { useDbTicks, useFrequencyTicks } from './axis-utils';

export interface SpectrumData {
    frequency: number;
    bandwidth: number;
    time?: number;
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
}

export const SpectrumWaterfall: React.FC<SpectrumWaterfallProps> = ({
    data,
    refLevel = 0,
    displayRange = 80,
    averaging = 0.5,
    showPeakHold = false,
    colorMap = 'turbo',
    className,
}) => {
    const { fftBins, frequency: centerFrequency, bandwidth, time } = data;
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

    const stateRef = useRef({
        fftBins: new Float32Array(0),
        averagedBins: new Float32Array(0),
        fftSize: 0,
        waterfallTexture: null as WebGLTexture | null,
        waterfallRow: 0,
        waterfallHeight: 512,
        colormapTexture: null as WebGLTexture | null,
        spectrumDataTexture: null as WebGLTexture | null,

        spectrumVao: null as WebGLVertexArrayObject | null,
        waterfallVao: null as WebGLVertexArrayObject | null,

        programSpectrumLine: null as WebGLProgram | null,
        programSpectrumFill: null as WebGLProgram | null,
        programWaterfall: null as WebGLProgram | null,

        gl: null as WebGL2RenderingContext | null,
        props: { refLevel, displayRange, colorMap, averaging, showPeakHold },
        currentTime: 0,
    });

    useEffect(() => {
        stateRef.current.props = { refLevel, displayRange, colorMap, averaging, showPeakHold };
        const gl = stateRef.current.gl;
        if (gl && stateRef.current.colormapTexture) {
            gl.activeTexture(gl.TEXTURE1);
            gl.bindTexture(gl.TEXTURE_2D, stateRef.current.colormapTexture);
            const data = generateColorMap(colorMap as any);
            gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, 256, 1, gl.RGBA, gl.UNSIGNED_BYTE, data);
        }
    }, [refLevel, displayRange, colorMap, averaging, showPeakHold]);

    useEffect(() => {
        if (fftBins && fftBins.length > 0) {
            if (fftBins.length !== stateRef.current.fftSize) {
                stateRef.current.fftSize = fftBins.length;
                stateRef.current.averagedBins = new Float32Array(fftBins);
            }
            stateRef.current.fftBins = fftBins as any;
        }
        stateRef.current.currentTime = time || Date.now();
    }, [fftBins, time]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const gl = canvas.getContext('webgl2', { alpha: false, antialias: false });
        if (!gl) {
            console.error('WebGL 2 not supported');
            return;
        }
        stateRef.current.gl = gl;

        const pSpecLine = createProgram(gl, SPECTRUM_VS, SPECTRUM_FS);
        const pSpecFill = createProgram(gl, SPECTRUM_FILL_VS, SPECTRUM_FILL_FS);
        const pWaterfall = createProgram(gl, WATERFALL_VS, WATERFALL_FS);

        if (!pSpecLine || !pSpecFill || !pWaterfall) return;

        stateRef.current.programSpectrumLine = pSpecLine;
        stateRef.current.programSpectrumFill = pSpecFill;
        stateRef.current.programWaterfall = pWaterfall;

        const sVao = gl.createVertexArray();
        stateRef.current.spectrumVao = sVao;

        const wVao = gl.createVertexArray();
        gl.bindVertexArray(wVao);
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

        const extLinear = gl.getExtension('OES_texture_float_linear');
        const filter = extLinear ? gl.LINEAR : gl.NEAREST;

        const wTex = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, wTex);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, filter);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, filter);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
        stateRef.current.waterfallTexture = wTex;

        const sDataTex = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, sDataTex);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        stateRef.current.spectrumDataTexture = sDataTex;

        const cmTex = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, cmTex);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 256, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, generateColorMap(stateRef.current.props.colorMap as any));
        stateRef.current.colormapTexture = cmTex;

        let currentFftSize = 0;

        const render = () => {
            const state = stateRef.current;
            const { fftBins } = state;

            if (resizeCanvas(canvas)) {
                gl.viewport(0, 0, canvas.width, canvas.height);
            }

            gl.clearColor(0, 0, 0, 1);
            gl.clear(gl.COLOR_BUFFER_BIT);

            if (fftBins.length === 0) {
                rafRef.current = requestAnimationFrame(render);
                return;
            }

            if (fftBins.length !== currentFftSize) {
                currentFftSize = fftBins.length;
                gl.bindTexture(gl.TEXTURE_2D, state.waterfallTexture);
                gl.texImage2D(gl.TEXTURE_2D, 0, gl.R32F, currentFftSize, state.waterfallHeight, 0, gl.RED, gl.FLOAT, null);
                gl.bindTexture(gl.TEXTURE_2D, state.spectrumDataTexture);
                gl.texImage2D(gl.TEXTURE_2D, 0, gl.R32F, currentFftSize, 1, 0, gl.RED, gl.FLOAT, null);
            }

            const factor = Math.max(0, Math.min(1, state.props.averaging || 0));
            if (state.averagedBins.length !== currentFftSize) {
                state.averagedBins = new Float32Array(fftBins);
            } else if (factor > 0) {
                const alpha = factor;
                const oneMinusAlpha = 1.0 - alpha;
                for (let i = 0; i < currentFftSize; i++) {
                    state.averagedBins[i] = state.averagedBins[i] * alpha + fftBins[i] * oneMinusAlpha;
                }
            } else {
                state.averagedBins.set(fftBins);
            }
            const displayBins = state.averagedBins;

            gl.bindTexture(gl.TEXTURE_2D, state.waterfallTexture);
            gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1);
            gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, state.waterfallRow, currentFftSize, 1, gl.RED, gl.FLOAT, displayBins);

            // Update Markers Logic
            const now = state.currentTime || Date.now();
            if (now - lastMarkerTime.current > 5000) {
                const date = new Date(now);
                const timeStr = date.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
                // Optional: add milliseconds if needed for high precision, but HH:MM:SS is usually fine
                // const ms = date.getMilliseconds().toString().padStart(3, '0');
                // const label = `${timeStr}.${ms}`;
                const label = timeStr;
                const newMarker = { id: now, label: label, rowIndex: state.waterfallRow };

                // Update both Ref (for immediate thread access) and State (for DOM render)
                const newMarkers = [...markersRef.current, newMarker].filter(() => {
                    // Basic age assumption: if it's too old we remove it next cycle
                    // We'll rely on visual scroll. If it's old it naturally scrolls off.
                    // Prune if > 50 markers just to be safe.
                    return true;
                }).slice(-20); // Keep max 20 active markers

                markersRef.current = newMarkers;
                setMarkers(newMarkers);
                lastMarkerTime.current = now;
            }

            // Update positions
            const H = state.waterfallHeight;
            markersRef.current.forEach(m => {
                const el = markerDomRefs.current.get(m.id);
                if (el) {
                    // Calculate distance from current row
                    // This logic assumes waterfall moves DOWN
                    // shader: Y = fract(v_texCoord.y + offset)
                    // offset = waterfallRow / H
                    // The "top" of the view corresponds to T = 0 in shader => fract(0 + offset) = offset = current Row
                    // So `waterfallRow` is at the visual top.
                    // Rows before it are visually below.

                    // If m.rowIndex is where we inserted.
                    // Distance = (waterfallRow - m.rowIndex + H) % H
                    // This is how many rows "ago" it was.
                    // distance = 0 => top.
                    // distance = H/2 => middle.

                    let dist = (state.waterfallRow - m.rowIndex + H) % H;
                    let pct = (dist / H) * 100;

                    el.style.top = `${pct}%`;

                    // Fade out if near bottom (optional)
                    el.style.opacity = pct > 98 ? '0' : '1';
                }
            });

            state.waterfallRow = (state.waterfallRow + 1) % state.waterfallHeight;

            gl.bindTexture(gl.TEXTURE_2D, state.spectrumDataTexture);
            gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, currentFftSize, 1, gl.RED, gl.FLOAT, displayBins);

            const hSplit = Math.floor(canvas.height * 0.66);
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

            gl.viewport(0, hSplit, canvas.width, canvas.height - hSplit);

            gl.enable(gl.BLEND);
            gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

            gl.useProgram(state.programSpectrumFill);
            gl.bindVertexArray(state.spectrumVao);

            gl.activeTexture(gl.TEXTURE0);
            gl.bindTexture(gl.TEXTURE_2D, state.spectrumDataTexture);
            gl.uniform1i(gl.getUniformLocation(pSpecFill, 'u_data'), 0);

            gl.uniform1f(gl.getUniformLocation(pSpecFill, 'u_bins'), currentFftSize);
            gl.uniform1f(gl.getUniformLocation(pSpecFill, 'u_minDb'), state.props.refLevel - state.props.displayRange);
            gl.uniform1f(gl.getUniformLocation(pSpecFill, 'u_maxDb'), state.props.refLevel);

            gl.drawArrays(gl.TRIANGLE_STRIP, 0, currentFftSize * 2);

            gl.useProgram(state.programSpectrumLine);
            gl.bindVertexArray(state.spectrumVao); // Reuse empty VAO

            gl.activeTexture(gl.TEXTURE0);
            gl.bindTexture(gl.TEXTURE_2D, state.spectrumDataTexture);
            gl.uniform1i(gl.getUniformLocation(pSpecLine, 'u_data'), 0);

            gl.uniform1f(gl.getUniformLocation(pSpecLine, 'u_bins'), currentFftSize);
            gl.uniform1f(gl.getUniformLocation(pSpecLine, 'u_minDb'), state.props.refLevel - state.props.displayRange);
            gl.uniform1f(gl.getUniformLocation(pSpecLine, 'u_maxDb'), state.props.refLevel);

            gl.drawArrays(gl.LINE_STRIP, 0, currentFftSize);

            gl.disable(gl.BLEND);

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

        const spectrumHeight = rect.height * 0.34;
        let db = -Infinity;

        if (y < spectrumHeight) {
            const dbRange = displayRange;
            const dbPerPixel = dbRange / spectrumHeight;
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

            {/* dB Scale (Left Overlay) */}
            <div
                className="absolute top-0 left-0 right-0 pointer-events-none overflow-hidden"
                style={{ height: '34%' }} // Only top section
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
                                t.percent > 95 ? "opacity-0" : "opacity-100" // Hide label if too close to bottom boundary
                            )}
                        >
                            {t.val}
                        </div>
                        <div className="w-full h-px bg-white/10" style={{ width: dimensions.width }} />
                    </div>
                ))}
            </div>

            {/* Frequency Scale (Middle Overlay) */}
            <div
                className="absolute left-0 right-0 h-6 bg-black flex items-center border-y border-white/20 pointer-events-none z-20"
                style={{ top: '34%' }}
            >
                {/* Ticks */}
                {freqTicks.map(t => (
                    <div
                        key={t.val}
                        className="absolute top-0 h-full flex flex-col justify-center items-center"
                        style={{ left: `${t.percent}%`, transform: 'translateX(-50%)' }}
                    >
                        <span className="relative z-10 text-[10px] text-white font-mono bg-black px-1 whitespace-nowrap">
                            {t.label}
                        </span>
                        {/* Full height grid line */}
                        <div
                            className="w-px bg-white/10 absolute left-1/2 -translate-x-1/2 pointer-events-none"
                            style={{ height: dimensions.height, top: -spectrumHeight }}
                        />
                    </div>
                ))}
                {/* Center Line highlight (Axis only) */}
                <div className="absolute top-0 left-1/2 w-0.5 h-[5px] bg-red-500"></div>
            </div>

            {/* Waterfall Markers Container (Bottom 66%) */}
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

            {/* Info Overlay */}
            <div className="absolute top-2 right-2 text-xs text-white/70 font-mono pointer-events-none select-none bg-black/60 p-2 rounded text-right border border-white/10">
                <div className="font-bold text-white">{(centerFrequency / 1e6).toFixed(3)} MHz</div>
                <div className="text-white/50">Span: {(bandwidth / 1e6).toFixed(3)} MHz</div>
            </div>

            {/* Hover Readout */}
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
