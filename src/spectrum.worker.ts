
const FRAME_PERIOD_MS = 20; // 50Hz
const FRAME_PERIOD_SEC = 0.020;
const SIZE = 2048;

let intervalId: any = null;
let lastTickTime = 0;
let simTime = 0;
let seq = 0;

self.onmessage = (e) => {
    if (e.data === 'start') {
        if (intervalId) return;
        lastTickTime = Date.now();
        intervalId = setInterval(tick, FRAME_PERIOD_MS);
    } else if (e.data === 'stop') {
        if (intervalId) clearInterval(intervalId);
        intervalId = null;
    }
};

function tick() {
    const now = Date.now();
    // Catch-up logic (if worker was throttled)
    const deltaMs = now - lastTickTime;
    let framesToGen = Math.floor(deltaMs / FRAME_PERIOD_MS);

    // Cap catch-up to avoid freezing (e.g. 5 seconds)
    if (framesToGen > 250) framesToGen = 250;
    if (framesToGen < 1) framesToGen = 1; // Force at least 1 if triggered

    lastTickTime += framesToGen * FRAME_PERIOD_MS;
    // Don't let lastTickTime drift too far into future if we capped frames
    if (lastTickTime < now - 5000) lastTickTime = now;

    const batch = [];

    for (let f = 0; f < framesToGen; f++) {
        simTime += FRAME_PERIOD_SEC;
        seq++;

        // Calculate timestamp for this specific frame
        // "now" is the wake up time. logic matches App.tsx attempt
        // frameTs should be monotonic
        const frameTs = lastTickTime - ((framesToGen - 1 - f) * FRAME_PERIOD_MS);

        const buffer = new Float32Array(SIZE);

        // Generate noise + signals
        for (let i = 0; i < SIZE; i++) {
            let noise = -100 + (Math.random() * 10);

            // Signal 1: Sine wave drifting
            const freq1 = 0.2 + Math.sin(simTime * 0.1) * 0.3;
            const dist1 = Math.abs((i / SIZE * 2 - 1) - freq1);
            if (dist1 < 0.05) {
                noise += 50 * Math.exp(-dist1 * 100);
            }

            // Signal 2: Pulsing
            const freq2 = -0.5;
            const dist2 = Math.abs((i / SIZE * 2 - 1) - freq2);
            if (dist2 < 0.02) {
                noise += (Math.sin(simTime * 5) * 20 + 40) * Math.exp(-dist2 * 200);
            }

            buffer[i] = noise;
        }

        batch.push({
            bins: buffer,
            time: frameTs / 1000.0,
            seq: seq
        });
    }

    self.postMessage(batch);
}
