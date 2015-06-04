Renderer.WebGLRenderer = function(gl, textures) {
};

Renderer.WebGLRenderer.MaxNumbSprites = Math.floor(65000/6);

Renderer.WebGLRenderer.prototype = {
    constructor : Renderer.WebGLRenderer,
    
    init : function(gl, vs, fs) {
        
    },
    
    clear : function(gl) {
    },
    
    stage : function(shader, texture, transform, color) {
    },
    
    drawStaged : function(gl) {
    }
};