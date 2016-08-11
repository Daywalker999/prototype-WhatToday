module.exports = function(grunt) {
    require('jit-grunt')(grunt);
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-exec');

    grunt.initConfig({
        less: {
            compile: {
                options: {
                    paths: ['js/base']
                },
                files: [{
                    expand: true,
                    cwd: "/app/public/css",
                    src: "*.less",
                    dest: "/app/public/css",
                    ext: ".css"
                }]
            }
        },
        browserify: {
            'public/js/js.min.js': ['public/js/js.js'],
            options: {
                transform: []
            }
        },
        watch: {
            style: {
                files: [
                    '/app/public/css/*.less'
                ],
                tasks: ['less:compile', 'exec:target'],
                options: {
                    nospawn: false,
                    livereload: true
                }
            },
            app: {
                files: [
                    '/app/**',
                    '!/app/node_modules/**',
                    '!/app/public/img/**',
                    '!/app/public/js/js.min.js'
                ],
                tasks: ['browserify'],
                options: {
                    nospawn: false,
                    livereload: true
                }
            },
        }
    });

    grunt.registerTask('default', ['less:compile', 'browserify', 'watch']);
};
