
export const SPECTRUM_FILL_VS = `#version 300 es
uniform sampler2D u_data; // Nx1 texture
uniform float u_bins;
uniform float u_minDb;
uniform float u_maxDb;

out float v_yNorm; // For gradient

void main() {
  int id = gl_VertexID;
  int binIndex = id / 2;
  bool isTop = (id % 2) == 0;

  // Fetch magnitude (using texelFetch for exact pixel)
  float mag = texelFetch(u_data, ivec2(binIndex, 0), 0).r;
  
  // Normalize Y: (mag - min) / span
  float yNorm = (mag - u_minDb) / (u_maxDb - u_minDb);
  
  // If bottom vertex, force Y to min (0.0 normalized)
  if (!isTop) {
     yNorm = 0.0;
  }
  
  v_yNorm = yNorm; // Pass to FS for gradient

  // X coordinate: -1..1
  float x = (float(binIndex) / (u_bins - 1.0)) * 2.0 - 1.0;
  // Y coordinate: -1..1
  float y = yNorm * 2.0 - 1.0;

  gl_Position = vec4(x, y, 0.0, 1.0);
}
`;

export const SPECTRUM_FILL_FS = `#version 300 es
precision mediump float;
in float v_yNorm;
out vec4 outColor;

void main() {
  // Gradient from Dark Blue (bottom) to Light Blue (top)
  vec4 colorBottom = vec4(0.0, 0.1, 0.3, 0.6); // Dark semi-transparent
  vec4 colorTop = vec4(0.0, 0.6, 1.0, 0.9);    // Brighter Light Blue
  
  outColor = mix(colorBottom, colorTop, v_yNorm);
}
`;

export const SPECTRUM_LINE_VS = `#version 300 es
uniform sampler2D u_data;
uniform float u_bins;
uniform float u_minDb;
uniform float u_maxDb;

void main() {
  int binIndex = gl_VertexID;
  float mag = texelFetch(u_data, ivec2(binIndex, 0), 0).r;
  
  float yNorm = (mag - u_minDb) / (u_maxDb - u_minDb);
  
  float x = (float(binIndex) / (u_bins - 1.0)) * 2.0 - 1.0;
  float y = yNorm * 2.0 - 1.0;

  gl_Position = vec4(x, y, 0.0, 1.0);
}
`;

export const SPECTRUM_VS = SPECTRUM_LINE_VS;

export const SPECTRUM_FS = `#version 300 es
precision mediump float;
uniform vec4 u_color;
out vec4 outColor;

void main() {
  outColor = vec4(1.0, 1.0, 1.0, 1.0); // Pure White Line
}
`;

export const WATERFALL_VS = `#version 300 es
in vec2 a_position; // quad vertices -1..1
in vec2 a_texCoord; // 0..1

out vec2 v_texCoord;

void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
  v_texCoord = a_texCoord;
}
`;

export const WATERFALL_FS = `#version 300 es
precision mediump float;

in vec2 v_texCoord;
out vec4 outColor;

uniform sampler2D u_waterfall;
uniform sampler2D u_colormap;
uniform float u_offset; // Normalize Y offset for scrolling (0..1)
uniform float u_minDb;
uniform float u_maxDb;

void main() {
  // Scroll Y
  float y = fract(v_texCoord.y + u_offset);
  
  // Sample magnitude from waterfall texture (red channel or R float)
  float mag = texture(u_waterfall, vec2(v_texCoord.x, y)).r;
  
  // Map dB to 0..1 for colormap lookup
  float intensity = clamp((mag - u_minDb) / (u_maxDb - u_minDb), 0.0, 1.0);
  
  // Sample colormap
  outColor = texture(u_colormap, vec2(intensity, 0.5));
}
`;
