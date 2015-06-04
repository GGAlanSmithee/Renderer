'use strict';

/**
* @author       Alan Smithee <ggnore.alan.smithee@gmail.com>
* @copyright    2015 GGNoRe.
* @license      {@link https://github.com/GGAlanSmithee/Renderer/blob/master/LICENSE|MIT License}
*/

if (typeof exports === 'undefined') {
    var global = window;
}

(function(){

    var root = this;



/* global Entites:true */
/**
* @author       Alan Smithee <ggnore.alan.smithee@gmail.com>
* @copyright    2015 GGNoRe.
* @license      {@link https://github.com/GGAlanSmithee/Renderer/blob/master/LICENSE|MIT License}
*/

/**
* @namespace Renderer
*/
var Renderer = Renderer || {
	VERSION: '0.0.1'
};


/**
* @author       Alan Smithee <ggnore.alan.smithee@gmail.com>
* @copyright    2015 GGNoRe.
* @license      {@link https://github.com/GGAlanSmithee/Renderer/blob/master/LICENSE|MIT License}
*/

    if (typeof exports !== 'undefined') {    
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = Renderer;
        }
        exports.Renderer = Renderer;
    } else if (typeof define !== 'undefined' && define.amd) {
        define('Renderer', (function() { return root.Renderer = Renderer; }) ());
    } else {
        root.Renderer = Renderer;
    }
}).call(this);

/*
* "Creativity is contagious. Pass it on." - Albert Einsten
*/



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


Renderer.WebGLShader = function(gl, name, vsSource, fsSource) {
    return this;
};

Renderer.WebGLShader.prototype = {
    constructor : Renderer.WebGLShader
};