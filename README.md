# Spectrum Waterfall

Reusable Spectrum + Waterfall component with a local demo app.

## Build (library)

This builds only the library output used by other repos.

```bash
npm run build
```

Outputs:
- `dist/index.es.js`
- `dist/index.cjs.js`
- `dist/types/index.d.ts`

## Use in another repo (git dependency)

Add to `package.json` in the consumer repo:

```json
{
  "dependencies": {
    "spectrum-waterfall": "git+ssh://git@github.com/HBrauer/ReactSpectrum.git#v0.1.0"
  }
}
```

Then:

```bash
npm install
```

Import:

```ts
import { SpectrumWaterfall } from 'spectrum-waterfall';
```

Minimal usage:

```tsx
import { useState } from 'react';
import { SpectrumWaterfall, SpectrumData } from 'spectrum-waterfall';

export default function MySpectrumView() {
  const [frames, setFrames] = useState<SpectrumData[]>([]);

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <SpectrumWaterfall
        data={frames}
        refLevel={-20}
        displayRange={100}
        colorMap="turbo"
        waterfallScaleMode="fixed"
      />
    </div>
  );
}
```

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
- Use `waterfallScaleMode="auto"` for dynamic waterfall scaling, or `"fixed"` for a fixed min/max.

## Demo app (this repo only)

The demo app lives in `src/App.tsx`. Build it separately:

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
git commit -m "build: library output for v0.1.0"
```

3) Tag and push:
```bash
git tag v0.1.0
git push --tags
```

4) In the consumer repo:
```bash
npm install
```

When you update:
- Rebuild (`npm run build`)
- Commit `dist/`
- Tag a new version (e.g. `v0.1.1`)
- Update the tag in the consumer repo and reinstall
