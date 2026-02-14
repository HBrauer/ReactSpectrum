import { useEffect, useRef, useState } from 'react';
import { SpectrumWaterfall } from '@/components/sdr/SpectrumWaterfall';

function App() {
  const [fftData, setFftData] = useState<{ bins: Float32Array; time: number; seq: number }[]>([]);
  const [centerFreq, setCenterFreq] = useState(100e6); // 100 MHz
  const [bandwidth] = useState(2e6); // 2 MHz span
  const [colorMap, setColorMap] = useState('turbo');
  const [avg, setAvg] = useState(0.5);
  const [waterfallScaleMode, setWaterfallScaleMode] = useState<'auto' | 'fixed'>('auto');
  const [waterfallFixedMinDb, setWaterfallFixedMinDb] = useState(-120);
  const [waterfallFixedMaxDb, setWaterfallFixedMaxDb] = useState(0);
  const [playbackMode, setPlaybackMode] = useState<'live' | 'replay'>('live');
  const [isRunning, setIsRunning] = useState(true);
  const workerRef = useRef<Worker | null>(null);

  const [refLevel, setRefLevel] = useState(-20);
  const [displayRange, setDisplayRange] = useState(100);

  useEffect(() => {
    // Spawn worker
    const worker = new Worker(new URL('./spectrum.worker.ts', import.meta.url), { type: 'module' });
    workerRef.current = worker;

    worker.onmessage = (e) => {
      setFftData(e.data);
    };

    return () => {
      worker.postMessage('stop');
      worker.terminate();
      workerRef.current = null;
    };
  }, []);

  useEffect(() => {
    const worker = workerRef.current;
    if (!worker) return;
    worker.postMessage(isRunning ? 'start' : 'stop');
  }, [isRunning]);

  return (
    <div className="fixed inset-0 overflow-hidden bg-neutral-900 text-white flex flex-col">
      <div className="p-4 border-b border-white/10 flex gap-4 items-center">
        <h1 className="font-bold text-lg">React Spectrum</h1>
        <button
          type="button"
          onClick={() => setIsRunning(prev => !prev)}
          className="bg-neutral-800 border border-white/20 rounded px-2 py-1 text-sm hover:bg-neutral-700"
        >
          {isRunning ? 'Stop' : 'Restart'}
        </button>
        <div className="flex gap-2 items-center text-sm">
          <label>Colormap:</label>
          <select value={colorMap} onChange={e => setColorMap(e.target.value)} className="bg-neutral-800 border border-white/20 rounded p-1">
            <option value="turbo">Turbo</option>
            <option value="viridis">Viridis</option>
            <option value="inferno">Inferno</option>
            <option value="grayscale">Grayscale</option>
          </select>
        </div>
        <div className="flex gap-2 items-center text-sm">
          <label>Avg:</label>
          <input
            type="range"
            min="0" max="0.95" step="0.05"
            value={avg}
            onChange={e => setAvg(parseFloat(e.target.value))}
          />
          {avg.toFixed(2)}
        </div>
        <div className="flex gap-2 items-center text-sm">
          <label>Mode:</label>
          <select
            value={playbackMode}
            onChange={e => setPlaybackMode(e.target.value as 'live' | 'replay')}
            className="bg-neutral-800 border border-white/20 rounded p-1"
          >
            <option value="live">Live</option>
            <option value="replay">Replay</option>
          </select>
        </div>
        <div className="flex gap-2 items-center text-sm">
          <label>WF Scale:</label>
          <select
            value={waterfallScaleMode}
            onChange={e => setWaterfallScaleMode(e.target.value as 'auto' | 'fixed')}
            className="bg-neutral-800 border border-white/20 rounded p-1"
          >
            <option value="auto">Auto</option>
            <option value="fixed">Fixed</option>
          </select>
        </div>
        <div className="flex gap-2 items-center text-sm">
          <label>Freq:</label>
          <input
            type="number"
            value={centerFreq}
            onChange={e => setCenterFreq(parseFloat(e.target.value))}
            className="bg-neutral-800 border border-white/20 rounded p-1 w-32"
          />
        </div>
      </div>

      <div className="flex-1 w-full relative">
        {fftData && (
          <SpectrumWaterfall
            data={fftData.map(d => ({
              fftBins: d.bins,
              frequency: centerFreq,
              bandwidth: bandwidth,
              time: d.time,
            }))}
            refLevel={refLevel}
            onRefLevelChange={setRefLevel}
            displayRange={displayRange}
            onDisplayRangeChange={setDisplayRange}
            averaging={avg}
            colorMap={colorMap}
            running={isRunning}
            playbackMode={playbackMode}
            waterfallScaleMode={waterfallScaleMode}
            waterfallFixedMinDb={waterfallFixedMinDb}
            waterfallFixedMaxDb={waterfallFixedMaxDb}
            onWaterfallFixedRangeChange={(minDb, maxDb) => {
              setWaterfallFixedMinDb(minDb);
              setWaterfallFixedMaxDb(maxDb);
            }}
            className="border border-white/10"
          />
        )}
      </div>
    </div>
  );
}

export default App;
