import { useEffect, useState } from 'react';
import { SpectrumWaterfall } from '@/components/sdr/SpectrumWaterfall';

function App() {
  const [fftData, setFftData] = useState<Float32Array>(new Float32Array(2048));
  const [centerFreq, setCenterFreq] = useState(100e6); // 100 MHz
  const [bandwidth] = useState(2e6); // 2 MHz span
  const [colorMap, setColorMap] = useState('turbo');
  const [avg, setAvg] = useState(0.5);

  useEffect(() => {
    const size = 2048;
    const buffer = new Float32Array(size);
    let time = 0;

    const interval = setInterval(() => {
      time += 0.05;

      // Generate noise + signals
      for (let i = 0; i < size; i++) {
        // Noise floor around -100 dB
        let noise = -100 + (Math.random() * 10);

        // Signal 1: Sine wave drifting
        const freq1 = 0.2 + Math.sin(time * 0.1) * 0.3; // -0.1 to 0.5 normalized freq
        const dist1 = Math.abs((i / size * 2 - 1) - freq1);
        if (dist1 < 0.05) {
          noise += 50 * Math.exp(-dist1 * 100);
        }

        // Signal 2: Pulsing
        const freq2 = -0.5;
        const dist2 = Math.abs((i / size * 2 - 1) - freq2);
        if (dist2 < 0.02) {
          noise += (Math.sin(time * 5) * 20 + 40) * Math.exp(-dist2 * 200);
        }

        buffer[i] = noise;
      }

      setFftData(new Float32Array(buffer));
    }, 33); // ~30 FPS

    return () => clearInterval(interval);
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
        <SpectrumWaterfall
          data={{
            fftBins: fftData,
            frequency: centerFreq,
            bandwidth: bandwidth,
            time: Date.now(),
          }}
          refLevel={-20}
          displayRange={100}
          averaging={avg}
          colorMap={colorMap}
          className="border border-white/10"
        />
      </div>
    </div>
  );
}

export default App;
