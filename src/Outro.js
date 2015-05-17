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
