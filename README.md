# Spectrum Waterfall

Reusable Spectrum + Waterfall React component with a local demo app.

## Quick start (consumer repo)

1) Add dependency:

```json
{
  "dependencies": {
    "spectrum-waterfall": "git+ssh://git@github.com/HBrauer/ReactSpectrum.git#v0.1.5"
  }
}
```

2) Install:

```bash
npm install
```

3) Import and use:

```tsx
import { useState } from 'react';
import { SpectrumWaterfall, SpectrumData } from 'spectrum-waterfall';

export default function MySpectrumView() {
  const [frames, setFrames] = useState<SpectrumData[]>([]);
  const [running, setRunning] = useState(true);

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <button onClick={() => setRunning(v => !v)}>
        {running ? 'Stop' : 'Restart'}
      </button>
      <SpectrumWaterfall
        data={frames}
        running={running}
        refLevel={-20}
        displayRange={100}
        colorMap="turbo"
        waterfallScaleMode="fixed"
      />
    </div>
  );
}
```

Requirements:
- React 19.x and ReactDOM 19.x
- WebGL2 support in the browser

## Styles

The library ships compiled CSS in `dist/style.css` and the JS entry imports it. Consumers do not need Tailwind.

- If your bundler supports CSS imports from dependencies (Vite, webpack, etc.), no extra step is needed.
- If you do not see styles, add this once in your app entry:

```ts
import 'spectrum-waterfall/style.css';
```

## Data format

`data` is an array of frames with this shape:

```ts
type SpectrumData = {
  frequency: number;      // center frequency (Hz)
  bandwidth: number;      // span (Hz)
  time: number;           // seconds (monotonic)
  fftBins: Float32Array;  // dB values per bin
};
```

Notes:
- `data` can be an empty array; the component will render a blank view.
- `running` defaults to `true`.
- `running={false}` freezes the last rendered spectrum/waterfall state (useful at end-of-file).
- Switching `running` from `false` to `true` clears old internal history and starts fresh for new input.
- Use `waterfallScaleMode="auto"` for dynamic scaling, or `"fixed"` for a fixed min/max.
- WebGL2 is required.

## Playback control

Use `running` to control whether the component advances:

- `running={true}`: consumes incoming frames and keeps drawing.
- `running={false}`: pauses ingestion/render timeline and keeps the last state visible.
- `false -> true`: resets internal queue/history/markers so old lines are removed only on restart.

Typical file-player flow:
1) Play file A with `running={true}`.
2) End of file: set `running={false}` to hold last status on screen.
3) Load file B: set `running={true}` and provide new frames.

## Build (library)

This builds only the library output used by other repos.

```bash
npm run build
```

Outputs:
- `dist/index.es.js`
- `dist/index.cjs.js`
- `dist/types/index.d.ts`
- `dist/style.css`

## Demo app (this repo only)

The demo app lives in `src/App.tsx`.

Build demo:

```bash
npm run build:demo
```

Run locally:

```bash
npm run dev
```

## Release workflow (git dependency)

This repo is installed by other apps directly from git, so you should commit the build output and tag releases.

1) Build the library:
```bash
npm run build
```

2) Commit the build output:
```bash
git add dist package.json README.md
git commit -m "build: library output for vX.Y.Z"
```

3) Tag and push:
```bash
git tag vX.Y.Z
git push --tags
```

4) In the consumer repo:
```bash
npm install
```

When you update:
- Rebuild (`npm run build`)
- Commit `dist/`
- Tag a new version (e.g. `v0.1.6`)
- Update the tag in the consumer repo and reinstall
