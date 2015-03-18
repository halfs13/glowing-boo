module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      react: {
        files: 'src/**/*.jsx',
        tasks: ['browserify']
      }
    },

    browserify: {
      options: {
        transform: [ require('grunt-react').browserify ]
      },
      client: {
        src: ['src/**/*.jsx'],
        dest: 'bundle.js'
      }
    },

    less: {
        options: {
            paths: [
                'src/components'
            ]
        },
        app: {
            files: {
                'bundle.css': 'src/app.less'
            }
        }
    },

    clean: {
        bower: ['bower_components'],
        less: ['bundle.css'],
        bundles: ['bundle.js', 'bundle.css']
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('default', ['clean', 'browserify']);
};