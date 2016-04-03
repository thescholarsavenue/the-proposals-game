module.exports = function(grunt) {

	grunt.initConfig({
		clean: ['dist'],
		copy: {
			dist: {
				files: [{
					expand: true,
					src: ['index.html','jsmain.js','cssmain.css', 'tsa.png', 'candis/soc-cult/2010-1.jpg','candis/soc-cult/2010-2.jpg','candis/soc-cult/2010-3.jpg','candis/soc-cult/2010-4.jpg','candis/soc-cult/2011-1.jpg','candis/soc-cult/2011-2.jpg','candis/soc-cult/2011-3.jpg','candis/soc-cult/2011-4.jpg','candis/soc-cult/2012-1.jpg','candis/soc-cult/2012-2.jpg','candis/soc-cult/2012-3.jpg','candis/soc-cult/2012-4.jpg','candis/soc-cult/2013-1.jpg','candis/soc-cult/2013-2.jpg','candis/soc-cult/2013-3.jpg','candis/soc-cult/2013-4.jpg','candis/soc-cult/2014-1.jpg','candis/soc-cult/2014-2.jpg','candis/soc-cult/2014-3.jpg','candis/soc-cult/2014-4.jpg','candis/soc-cult/2015-1.jpg','candis/soc-cult/2015-2.jpg','candis/soc-cult/2015-3.jpg','candis/tech/2010-1.jpg','candis/tech/2010-2.jpg','candis/tech/2010-3.jpg','candis/tech/2010-4.jpg', 'candis/tech/2011-1.jpg','candis/tech/2011-2.jpg','candis/tech/2011-3.jpg','candis/tech/2012-1.jpg','candis/tech/2012-2.jpg','candis/tech/2012-3.jpg','candis/tech/2012-4.jpg','candis/tech/2013-1.jpg','candis/tech/2013-2.jpg','candis/tech/2013-3.jpg','candis/tech/2013-4.jpg','candis/tech/2014-1.jpg','candis/tech/2014-2.jpg','candis/tech/2014-3.jpg','candis/tech/2014-4.jpg','candis/tech/2014-5.jpg','candis/tech/2015-1.jpg','candis/tech/2015-2.jpg','candis/tech/2015-3.jpg','candis/tech/2015-4.jpg','candis/sports/2015-1.jpg','candis/sports/2015-2.jpg','candis/sports/2015-3.jpg','candis/sports/2014-1.jpg','candis/sports/2014-2.jpg','candis/sports/2014-3.jpg','candis/sports/2014-4.jpg','candis/sports/2014-5.jpg','candis/sports/2013-1.jpg','candis/sports/2013-2.jpg','candis/sports/2013-3.jpg','candis/sports/2013-4.jpg','candis/sports/2012-1.jpg','candis/sports/2012-2.jpg','candis/sports/2012-3.jpg','candis/sports/2012-4.jpg','candis/sports/2011-1.jpg','candis/sports/2011-2.jpg','candis/sports/2011-3.jpg','candis/sports/2010-1.jpg','candis/sports/2010-2.jpg'],
					dest: 'dist/'
				}]
			}
		},
				
		'gh-pages': {
			options: {
				base: 'dist'
			},
			src: ['**']
		}
	});

    grunt.registerTask('build', ['clean', 'copy:dist']);

	require('load-grunt-tasks')(grunt);
};