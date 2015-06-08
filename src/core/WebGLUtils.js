Renderer.WebGLUtils = {
    getWebGLContext : function(canvas) {
        let gl = null;
        
        if (canvas === undefined) {
            return gl;
        }

        canvas.width  = Math.round(canvas.offsetWidth);
        canvas.height = Math.round(canvas.offsetHeight);
        
        try {
          gl = canvas.getContext("webgl");
        } catch (e) {
          console.log('A WebGL context could not be initialised:', e);
        }
        
        gl.viewportWidth = canvas.width;
        gl.viewportHeight = canvas.height;
        
        gl.viewport(0.0, 0.0, gl.viewportWidth, gl.viewportHeight);
        gl.clearColor(0.390, 0.582, 0.926, 1.0);
        gl.enable(gl.DEPTH_TEST);
      
        return gl;
    },
    
    createProgram : function(gl, vsScript, fsScript) {
        // Compile vertex shader
        var vertexShader = gl.createShader(gl.VERTEX_SHADER);
        gl.shaderSource(vertexShader, vsScript);
        gl.compileShader(vertexShader);
        
        // Compile fragment shader
        var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
        gl.shaderSource(fragmentShader, fsScript);
        gl.compileShader(fragmentShader);
        
        // Link program with shaders
        var program = gl.createProgram();
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);
        gl.useProgram(program);
        
        return program;
    },

    createVertexBufferData : function(renderer, numbItems) {
        let bd = new Float32Array(numbItems);
        
        if (!(renderer instanceof Renderer.WebGLRenderer)) {
            return bd;
        }
        
        let qz = renderer.quadSize;
        let vs = renderer.vertexSize;
        
        let so = renderer.scaleOffset / 4;
        let co = renderer.colorOffset / 4;
        
        let r = 0;
        let i = (numbItems - 1) * qz;
        while (i >= 0) {
            r = i;
            bd[r] = -1.0; bd[r+1] = -1.0; bd[r+2] = 0.0; bd[r+3] = 0.0; bd[r+so] = 1.0; bd[r+so+1] = 1.0; bd[r+co] = 1.0; bd[r+co+1] = 1.0; bd[r+co+2] = 1.0; bd[r+co+3] = 1.0;
            
            r += vs;
            bd[r] =  1.0; bd[r+1] = -1.0; bd[r+2] = 1.0; bd[r+3] = 0.0; bd[r+so] = 1.0; bd[r+so+1] = 1.0; bd[r+co] = 1.0; bd[r+co+1] = 1.0; bd[r+co+2] = 1.0; bd[r+co+3] = 1.0;
            
            r += vs;
            bd[r] = -1.0; bd[r+1] =  1.0; bd[r+2] = 0.0; bd[r+3] = 1.0; bd[r+so] = 1.0; bd[r+so+1] = 1.0; bd[r+co] = 1.0; bd[r+co+1] = 1.0; bd[r+co+2] = 1.0; bd[r+co+3] = 1.0;
            
            r += vs;
            bd[r] =  1.0; bd[r+1] =  1.0; bd[r+2] = 1.0; bd[r+3] = 1.0; bd[r+so] = 1.0; bd[r+so+1] = 1.0; bd[r+co] = 1.0; bd[r+co+1] = 1.0; bd[r+co+2] = 1.0; bd[r+co+3] = 1.0;
            
            i -= qz;
        }
        
        return bd;
    },
    
    createVertexIndexData : function(numbItems) {
        let id = new Uint16Array(numbItems * 6);
        
        let v = (numbItems - 1) * 4;
        let i = (numbItems - 1) * 6;
        while (i >= 0) {
            
            id[i] = v; id[i+1] = v+1; id[i+2] = v+2; id[i+3] = v+2; id[i+4] = v+1; id[i+5] = v+3;

            v -= 4;
            i -= 6;
        }
        
        return id;
    },
    
    isPowerOf2 : function(value) {
      return (value & (value - 1)) === 0;
    },

    steupTextureFilteringAndMips : function(gl, width, height) {
        if (Renderer.WebGLUtils.isPowerOf2(width) && Renderer.WebGLUtils.isPowerOf2(height)) {
            gl.generateMipmap(gl.TEXTURE_2D);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
        } else {
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        }
        
        gl.bindTexture(gl.TEXTURE_2D, null);
    },

    // todo make this in to promise, returning the image when loaded
    addTexture : function(gl, textures, name, path) {
        let textureId = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, textureId);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([255, 0, 0, 255]));
        

        let img = new Image();
        img.src = path;
        
        img.onload = function() {
           gl.bindTexture(gl.TEXTURE_2D, textureId);
           gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
           Renderer.WebGLUtils.steupTextureFilteringAndMips(gl, img.width, img.height);
           textures[name] = textureId;
        };
    }
};