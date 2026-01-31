import { useEffect, useState } from 'react';
import { SpectrumWaterfall } from '@/components/sdr/SpectrumWaterfall';

function App() {
  const [fftData, setFftData] = useState<{ bins: Float32Array; time: number; seq: number }>({
    bins: new Float32Array(2048),
    time: Date.now() / 1000,
    seq: 0,
  });
  const [centerFreq, setCenterFreq] = useState(100e6); // 100 MHz
  const [bandwidth] = useState(2e6); // 2 MHz span
  const [colorMap, setColorMap] = useState('turbo');
  const [avg, setAvg] = useState(0.5);

  useEffect(() => {
    // Spawn worker
    const worker = new Worker(new URL('./spectrum.worker.ts', import.meta.url), { type: 'module' });

    worker.onmessage = (e) => {
      setFftData(e.data);
    };

    worker.postMessage('start');

    return () => {
      worker.postMessage('stop');
      worker.terminate();
    };
  }, []);

  return (
    <div className="w-screen h-screen bg-neutral-900 text-white flex flex-col">
      <div className="p-4 border-b border-white/10 flex gap-4 items-center">
        <h1 className="font-bold text-lg">React Spectrum</h1>
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
            data={Array.isArray(fftData) ? fftData.map(d => ({
              fftBins: d.bins,
              frequency: centerFreq,
              bandwidth: bandwidth,
              time: d.time,
            })) : {
              fftBins: fftData.bins,
              frequency: centerFreq,
              bandwidth: bandwidth,
              time: fftData.time,
            }}
            refLevel={-20}
            displayRange={100}
            averaging={avg}
            colorMap={colorMap}
            className="border border-white/10"
          />
        )}
      </div>
    </div>
  );
}

export default App;
