Renderer.WebGLRenderer = function(gl, textures) {
};

Renderer.WebGLRenderer.SpritesPerDrawCall = Math.floor(65000/6);

Renderer.WebGLRenderer.prototype = {
    constructor : Renderer.WebGLRenderer,
    
    init : function(gl, vs, fs) {
        
    },
    
    createVertexBufferData : function() {
    },
    
    createVertexIndexData : function() {
    },

    addTexture : function(gl, name, path) {
    },
    
    clear : function(gl) {
    },
    
    stage : function(shader, texture, transform, color) {
    },
    
    drawStaged : function(gl) {
    }
};