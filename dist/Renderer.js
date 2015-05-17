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
* "What matters in this life is not what we do but what we do for others, the legacy we leave and the imprint we make." - Eric Meyer
*/
