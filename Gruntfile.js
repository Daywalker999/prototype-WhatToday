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
                    'public/css/*.less'
                ],
                tasks: ['less:compile'],
                options: {
                    nospawn: false,
                    livereload: true
                }
            },
            app: {
                files: [
                    'public/js/**',
                    '!node_modules/**',
                    '!public/img/**',
                    '!public/js/js.min.js'
                ],
                tasks: ['browserify'],
                options: {
                    nospawn: false,
                    livereload: true
                }
            },
            index: {
                files: [
                    'index.html'
                ],
                tasks: [],
                options: {
                    nospawn: false,
                    livereload: true
                }
            }
        }
    });

    grunt.registerTask('default', ['less:compile', 'browserify', 'watch']);
};
