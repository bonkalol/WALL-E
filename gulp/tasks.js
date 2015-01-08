var gulp = require('gulp');

gulp.task('default', function() {
	gulp.start([
		'clean',
		'jade',
		'sass',
		'concat',
		'copyLibs',
		'copyFonts',
		'imagemin:all',
		'start'
		]);
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