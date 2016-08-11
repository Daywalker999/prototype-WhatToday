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
                    cwd: "public/css",
                    src: "style.less",
                    dest: "public/gen",
                    ext: ".css"
                }]
            }
        },
        browserify: {
            'public/gen/js.js': ['public/js/js.js'],
            options: {
                transform: [
                    'browserify-hogan'
                ]
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
                    'public/views/**',
                    '!node_modules/**',
                    '!public/gen/**'
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
