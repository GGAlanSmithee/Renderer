{
    "name" : "phong",
    
    "vertex" : {
        "name" : "standard",
        
        "attributes" : {
            "aPosition"    : "vec4"
            "aTranslation" : "vec3",
            "aRotation"    : "vec3",
            "aScale"       : "vec2",
            "aColor"       : "vec4"
        },
        
        "uniforms" : {
            "uProjectionMatrix" : "mat4",
            "uViewMatrix"       : "mat4"
        }
    },
    
    "fragment" : {
        "name" : "phong",
        
        "uniforms" : {
            "uDirectionalLight" : "DirectionalLight",
            "uSampler"          : "sampler2D"
        }
    }
}