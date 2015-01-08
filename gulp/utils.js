var gulp = require('gulp'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload,
	clean = require('gulp-clean'),
	log = require('./errorHandler');


gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: "."
		}
	});
});



gulp.task('clean', function() {

	return gulp.src(['production/css', 'production/*.html', 'production/js', 'production/img', 'production/font', 'production/data'], {read: false, force: true})
	.pipe(clean())
	.on('error', log);

});