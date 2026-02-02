/**
 * Compiles a shader from source.
 */
export declare function createShader(gl: WebGL2RenderingContext, type: number, source: string): WebGLShader | null;
/**
 * Creates a WebGL program from vertex and fragment shader sources.
 */
export declare function createProgram(gl: WebGL2RenderingContext, vsSource: string, fsSource: string): WebGLProgram | null;
/**
 * Resizes the canvas to match its display size.
 * Returns true if the canvas was resized.
 */
export declare function resizeCanvas(canvas: HTMLCanvasElement): boolean;
