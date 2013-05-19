'use strict';

module.exports = function(grunt) {
	// grunt configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		meta: {
			banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
				'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
				'<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
				'* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
				' Licensed <%= pkg.license %> */\n'
		},
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			all: ['Gruntfile.js', 'app/scripts/**/*.js', 'test/**/*.js']
		},
		gluejs: {
			all: {
				options: {
					banner: '<%= meta.banner %>\n',
					basepath: 'app/scripts',
				},
				src: 'app/scripts/**/*.js',
				dest: 'app/app.js'
			}
		},
		compass: {
			all: {
				options: {
					config: './config.rb'
				}
			}
		},
		htmlmin: {
			all: {
				options: {
					removeComments: true,
					collapseWhitespace: true
				},
				files: {
					'dist/index.html': 'app/index.html'
				}
			}
		},
		mochacli: {
			options: {
				ui: 'bdd',
				reporter: 'spec',
				bail: true,
				recursive: true,
				timeout: 30000,
				slow: 4000,
				require: ['test/common']
			},
			all: 'test/**/*.js'
		},
		watch: {
			files: ['<%= jshint.all %>', 'app/sass/**/*.scss'],
			tasks: ['build']
		},
		connect: {
			server: {
				options: {
					hostname: '*',
					port: 3000,
					base: 'app',
					keepalive: true
				}
			}
		}
	});

	// tasks deps
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-gluejs');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-mocha-cli');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');

	// alias and utils tasks
	grunt.registerTask('test', ['jshint', 'mochacli']);
	grunt.registerTask('build', ['test', 'gluejs', 'compass']);

	// default task
	grunt.registerTask('default', ['test']);
};