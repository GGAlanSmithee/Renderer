module.exports = function(grunt) {
  
  grunt.initConfig({
    jasmine : {
      test: {
        src: 'dist/Renderer.js',
        options: {
          specs:   [ 'test/spec/*.js' ],
          outfile: 'test/Runner.html'
        }
      }
    },
    jshint : {
      all: {
        options : {
          esnext : true
        },
        src: [ 'src/core/*.js' ]
      }
    },
    clean: {
      dist: ['dist']
    },
    concat: {
      options: {
        separator: '\n\n\n',
      },
      GG: {
        src: [
          'src/Intro.js',
          'src/Renderer.js',
          'src/Outro.js',
          'src/core/*.js'
        ],
        dest: 'dist/Renderer.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');
  
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['jasmine:test:build', 'jshint', 'clean', 'concat']);
};