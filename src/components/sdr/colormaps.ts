export type ColorMapName = 'turbo' | 'viridis' | 'inferno' | 'magma' | 'plasma' | 'grayscale';

/**
 * Generates a colormap texture data (RGBA8).
 * Size: 256x1
 */
export function generateColorMap(name: ColorMapName = 'turbo'): Uint8Array {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 1;
    const ctx = canvas.getContext('2d');
    if (!ctx) return new Uint8Array(256 * 4);

    const gradient = ctx.createLinearGradient(0, 0, 256, 0);

    switch (name) {
        case 'viridis':
            addColorStop(gradient, 0.0, '#440154');
            addColorStop(gradient, 0.25, '#3b528b');
            addColorStop(gradient, 0.5, '#21918c');
            addColorStop(gradient, 0.75, '#5ec962');
            addColorStop(gradient, 1.0, '#fde725');
            break;
        case 'inferno':
            addColorStop(gradient, 0.0, '#000004');
            addColorStop(gradient, 0.25, '#420a68');
            addColorStop(gradient, 0.5, '#932667');
            addColorStop(gradient, 0.75, '#dd513a');
            addColorStop(gradient, 1.0, '#fcffa4');
            break;
        case 'magma':
            addColorStop(gradient, 0.0, '#000004');
            addColorStop(gradient, 0.25, '#3b0f70');
            addColorStop(gradient, 0.5, '#8c2981');
            addColorStop(gradient, 0.75, '#fe6100');
            addColorStop(gradient, 1.0, '#fcfdbf');
            break;
        case 'grayscale':
            addColorStop(gradient, 0.0, '#000000');
            addColorStop(gradient, 1.0, '#ffffff');
            break;
        case 'turbo':
        default:
            // Approximate Turbo colormap
            // Real Turbo is complex, using a simplified version or stops similar to Jet but better
            addColorStop(gradient, 0.0, '#30123b'); // Dark violet
            addColorStop(gradient, 0.1, '#466be3'); // Blue
            addColorStop(gradient, 0.25, '#28bceb'); // Cyan
            addColorStop(gradient, 0.45, '#32f298'); // Green
            addColorStop(gradient, 0.65, '#a4fc3c'); // Yellow-Green
            addColorStop(gradient, 0.85, '#eecf3a'); // Yellow-Orange
            addColorStop(gradient, 0.95, '#fb7e21'); // Orange
            addColorStop(gradient, 1.0, '#7a0403'); // Red-Brown
            break;
    }

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 256, 1);

    const imageData = ctx.getImageData(0, 0, 256, 1);
    return new Uint8Array(imageData.data.buffer);
}

function addColorStop(gradient: CanvasGradient, pos: number, color: string) {
    gradient.addColorStop(pos, color);
}
