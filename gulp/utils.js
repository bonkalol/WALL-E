var gulp = require('gulp'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload,
	clean = require('gulp-clean'),
	log = require('./errorHandler'),
	configs = require('./configs');


gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: "."
		}
	});
});



gulp.task('clean', function() {

	return gulp.src('production', {read: false, force: true})
	.pipe(clean())
	.on('error', log);

});


gulp.task('emptyRemove', function() {

	return gulp.src(['production/**/*/empty.gulpkeep', 'production/empty.gulpkeep'], {read: false, force: true})
	.pipe(clean())
	.on('error', log);

});