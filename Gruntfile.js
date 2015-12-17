/**
 * Created by evaris on 25/11/2015.
 */


var app_src='app/';
var css_src=app_src+'css/';
var js_src=app_src+'ensp-angular/';
var ensp_angular = js_src+'ensp.built.js';
module.exports = function(grunt){

    require('load-grunt-tasks')(grunt);
   // var mozjpeg = require('imagemin-mozjpeg');
    grunt.initConfig({
        jshint: {
            all: [js_src+'/**/*.js','!'+js_src+'enps.built.min.js']
        },
        concat: {
            options: {
                separator: ';'
            },
            fusion: {
                src: [app_src+'app.js', js_src+'/**/*.js','!'+js_src+'**/*.built.*js'],
                dest: ensp_angular
            }

        },
        uglify: {
            options :{
                mangle:false //evite le renomage des variables lors de la minification
            },
            my_target: {
                files: {
                    'app/ensp-angular/ensp.built.min.js': [ensp_angular]
                }
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'app/css/ensp.buils.css': [css_src+'ensp.css', 'ensp-resp.css']
                }
            }
        },
        watch: {
            js: {
                files: [app_src+'**/*.js','!'+app_src+'**/*.buils.*'],
                tasks: ['concat','uglify'],
                options: {
                    spawn: false,
                    livereload:true
                }
            },
            css: {
                files: [app_src+'**/*.css','!'+css_src+'**/*.buils.*'],
                tasks: ['cssmin'],
                options: {
                    spawn: false,
                    livereload:true
                }
            },
            html: {
                files: [app_src+'templates/!**'],
                tasks: [],
                options: {
                    spawn: false,
                    livereload:true
                }
            }
        },
        connect: {
            server: {
                options: {
                    port: 8000,
                    hostname: '*',
                    keepalive: true,
                    base: {
                        path: '.'
                    },
                    open: {
                        appName: 'Chrome'
                    },
                }
            }
        },
        karma: {
            unit: { configFile: 'tests/karma.conf.js' }
        },
        imagemin: {                          // Task

           // dynamic: {// Another target
                dist: {
                    options: {
                        optimizationLevel: 7
                    },
                    files: [{
                        expand: true,                  // Enable dynamic expansion
                        cwd: 'app/images',                   // Src matches are relative to this path
                        src: ['**/*.{png,jpg,gif}','!min/**'],   // Actual patterns to match
                        dest: 'app/images/min/'                  // Destination path prefix
                    }]
                }
         //   }
        },
        replace: {
            another_example: {
                src: ['app/templates/**/*.html','app/css/**/*.css'],
                overwrite: true,                 // overwrite matched source files
                replacements: [{
                    from: "images/",
                    to: "images/min/"
                }]
            }
        }
    });
   /* grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');*/

    //grunt.registerTask('default',['jshint','concat','uglify','cssmin']);
    grunt.registerTask('default',['concat','uglify','cssmin','imagemin','replace']);
    //grunt.registerTask('default',['imagemin']);
};