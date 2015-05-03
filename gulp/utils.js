var gulp = require('gulp'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload,
	del = require('del'),
	configs = require('./configs');


gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: "."
		}
	});
});



gulp.task('clean', function() {

	return del(['dist/*'], function (err, deletedFiles) {
		console.log('Files deleted:', deletedFiles.join(', '));
	});


});