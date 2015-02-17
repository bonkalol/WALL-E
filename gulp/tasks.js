var gulp = require('gulp'),
	runSequence = require('run-sequence');

gulp.task('default', function(callback) {

	gulp.start('build');

});

gulp.task('build', function(callback) {

	runSequence(
		'clean',
		'sprite',
		['jade', 'sass', 'concat', 'copyStuff'],
		'imagemin:all',
		callback
		);

});

gulp.task('build-sprite', function(callback) {

	runSequence(
		'sprite',
		'sass',
		callback
		);

});

gulp.task('compile', function() {
	gulp.start([
		'jade',
		'sass',
		'concat'
		]);
});


gulp.task('start', function() {

	gulp.start([
		'browser-sync',
		'watch'
		]);

});


gulp.task('copyStuff', function() {

	gulp.start([
		'copyFonts',
		'copyLibs',
		'copyAssets',
		'copyData',
		'copyStatic'
		]);

});