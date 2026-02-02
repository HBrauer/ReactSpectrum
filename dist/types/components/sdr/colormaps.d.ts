export type ColorMapName = 'turbo' | 'viridis' | 'inferno' | 'magma' | 'plasma' | 'grayscale';
/**
 * Generates a colormap texture data (RGBA8).
 * Size: 256x1
 */
export declare function generateColorMap(name?: ColorMapName): Uint8Array;
