module.exports = function(grunt){
  grunt.initConfig({
    mocha_istanbul: {
      coverage: {
        src: 'test', // the folder, not the files,
        options: {
          mask: '*_test.js'
        }
      },
      coveralls: {
        src: 'test', // the folder, not the files
        options: {
          coverage:true,
          check: {
            lines: 75,
            statements: 75
          },
          root: './lib', // define where the cover task should consider the root of libraries that are covered by tests
          reportFormats: ['text']
        }
      }
    }
  });

  grunt.event.on('coverage', function(lcovFileContents, done){
    done();
  });

  grunt.loadNpmTasks('grunt-mocha-istanbul');

  grunt.registerTask('coveralls', ['mocha_istanbul:coveralls']);
  grunt.registerTask('coverage', ['mocha_istanbul:coverage']);
};