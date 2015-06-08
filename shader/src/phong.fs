precision mediump float;

const vec3 normal = vec3(0.0, 0.0, 1.0);

varying vec3 vPosition;
varying vec4 vColor;
varying vec2 vTexCoord;
varying mat4 vMvMatrix;

struct DirectionalLight {
    vec3 ambient;
    vec3 diffuse;
    vec3 direction;
};

uniform DirectionalLight uDirectionalLight;

uniform sampler2D uSampler;

// http://www.roxlu.com/2014/031/basic-shading-with-opengl
void main(void) {
    vec3 n = normalize(mat3(vMvMatrix) * normal);
    float sdn = max(dot(n, uDirectionalLight.direction), 0.0);

    vec3 spec = vec3(0.0);
    vec3 v = normalize(-vPosition);
    vec3 r = reflect(-uDirectionalLight.diffuse, n);
    if(sdn > 0.0) {
        spec = pow(max(dot(r, v), 0.0), 3.0) * uDirectionalLight.diffuse;
    }
    
    gl_FragColor = texture2D(uSampler, vec2(vTexCoord.s, vTexCoord.t)) * vColor * vec4(uDirectionalLight.ambient, 1.0) * sdn + 0.4 * vec4(spec, 1.0);
}