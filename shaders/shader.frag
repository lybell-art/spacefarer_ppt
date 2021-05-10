//출처 : https://github.com/aferriss/p5jsShaderExamples/blob/gh-pages/6_3d/6-2_vertexDisplacement/shader.frag

precision mediump float;

varying vec2 vTexCoord;
varying vec3 vNormal;

void main() {
  vec3 precolor = vec3(vNormal.x, abs(vNormal.y), vNormal.z);
  vec3 color = precolor * 0.3 + 0.7;
  gl_FragColor = vec4(color.x, color.y, color.z ,1.0);
}
