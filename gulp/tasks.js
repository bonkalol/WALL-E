var gulp = require('gulp'),
	runSequence = require('run-sequence');

gulp.task('default', function(callback) {
	runSequence(
		'clean',
		['jade', 'sass', 'concat', 'copyStuff'],
		'imagemin:all',
		'start',
		'emptyRemove',
		callback
		);
});

gulp.task('build', function(callback) {

	runSequence(
		'clean',
		['jade', 'sass', 'concat', 'copyStuff'],
		'imagemin:all',
		'emptyRemove',
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