import { useMemo } from 'react';

export function useFrequencyTicks(centerFreq: number, bandwidth: number, width: number) {
    return useMemo(() => {
        const startFreq = centerFreq - bandwidth / 2;
        const endFreq = centerFreq + bandwidth / 2;
        const range = bandwidth;

        // Target ~100px per tick
        const tickCount = Math.max(2, Math.floor(width / 100));
        const rawStep = range / tickCount;

        // Round to nice step
        const magnitude = Math.pow(10, Math.floor(Math.log10(rawStep)));
        let step = magnitude;
        if (rawStep / magnitude > 5) step *= 5;
        else if (rawStep / magnitude > 2) step *= 2;

        const ticks: { val: number; percent: number; label: string }[] = [];
        const firstTick = Math.ceil(startFreq / step) * step;

        for (let f = firstTick; f <= endFreq; f += step) {
            const percent = ((f - startFreq) / range) * 100;
            ticks.push({
                val: f,
                percent,
                label: (f / 1e6).toFixed(3) + 'M' // Simple formatting
            });
        }
        return ticks;
    }, [centerFreq, bandwidth, width]);
}

export function useDbTicks(refLevel: number, displayRange: number, height: number) {
    return useMemo(() => {
        const minDb = refLevel - displayRange;
        const maxDb = refLevel;

        // Target ~40px per tick
        const tickCount = Math.max(2, Math.floor(height / 40));
        const range = displayRange;
        const rawStep = range / tickCount;

        const step = Math.ceil(rawStep / 10) * 10; // 10dB steps usually

        const ticks: { val: number; percent: number }[] = [];
        const firstTick = Math.ceil(minDb / step) * step;

        for (let db = firstTick; db <= maxDb; db += step) {
            const percent = ((maxDb - db) / range) * 100; // 0% at top
            ticks.push({ val: db, percent });
        }
        return ticks;
    }, [refLevel, displayRange, height]);
}
