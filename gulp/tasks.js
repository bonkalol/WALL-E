var gulp = require('gulp'),
	configs = require('./configs'),
	runSequence = require('run-sequence');


gulp.task('default', function() {

	gulp.start('build', 'start');

});

gulp.task('build', function(callback) {

	// remove debug.js
	// from globs array
	configs.paths.srcPaths.js.push('!./app/js/modules/debug.js');
	// start task
	runSequence(
		'clean',
		'jade',
		'sprite',
		'sass',
		'concat',
		'copyStuff',
		'imagemin:all',
		'webp:all',
		'svgSprite',
		'buildUseref',
		callback);

});

gulp.task('build-sprite', function() {

	gulp.start('sprite', 'sass');

});

gulp.task('compile', function() {

	gulp.start('jade', 'sass', 'concat');

});


gulp.task('start', function() {

	gulp.start('browser-sync', 'watch');

});


gulp.task('copyStuff', function() {

	gulp.start('copyFonts', 'copyLibs', 'copyAssets', 'copyComponents', 'copyData', 'copyStatic');

});