attribute vec4 aPosition;
attribute vec3 aTranslation;
attribute vec3 aRotation;
attribute vec2 aScale;
attribute vec4 aColor;

uniform mat4 uProjectionMatrix;
uniform mat4 uViewMatrix;

varying vec3 vPosition;
varying vec4 vColor;
varying vec2 vTexCoord;
varying mat4 vMvMatrix;

mat4 scale(float x, float y, float z) {
    return mat4(vec4(x,   0.0, 0.0, 0.0),
                vec4(0.0, y,   0.0, 0.0),
                vec4(0.0, 0.0, z,   0.0),
                vec4(0.0, 0.0, 0.0, 1.0));
}

mat4 translate(float x, float y, float z) {
    return mat4(vec4(1.0, 0.0, 0.0, 0.0),
                vec4(0.0, 1.0, 0.0, 0.0),
                vec4(0.0, 0.0, 1.0, 0.0),
                vec4(x,   y,   z,   1.0));
}

mat4 rotateX(float phi) {
    return mat4(vec4(1.0,      0.0,       0.0, 0.0),
                vec4(0.0, cos(phi), -sin(phi), 0.0),
                vec4(0.0, sin(phi),  cos(phi), 0.0),
                vec4(0.0,      0.0,       0.0, 1.0));
}

mat4 rotateY(float theta) {
    return mat4(vec4( cos(theta), 0.0, sin(theta), 0.0),
                vec4(        0.0, 1.0,        0.0, 0.0),
                vec4(-sin(theta), 0.0, cos(theta), 0.0),
                vec4(        0.0, 0.0, 0.0, 1.0));
}

mat4 rotateZ(float psi) {
    return mat4(vec4(cos(psi), -sin(psi), 0.0, 0.0),
                vec4(sin(psi),  cos(psi), 0.0, 0.0),
                vec4(     0.0,       0.0, 1.0, 0.0),
                vec4(     0.0,       0.0, 0.0, 1.0));
}

mat4 rotate(float phi, float theta, float psi) {
    return rotateX(phi) * rotateY(theta) * rotateZ(psi);
}

void main(void) {
    vPosition = vec3(aPosition.xy, 1.0);
    
    vMvMatrix = uViewMatrix
              * scale(aScale.x, aScale.y, 1.0)
              * translate(aTranslation.x, aTranslation.y, aTranslation.z)
              * rotate(aRotation.x, aRotation.y, aRotation.z);
    
    gl_Position = uProjectionMatrix * vMvMatrix * vec4(aPosition.xy, 1.0, 1.0);
        
    vColor    = aColor;
    vTexCoord = aPosition.zw;
}