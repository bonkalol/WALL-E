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

	del(['production'], function (err, deletedFiles) {
		console.log('Files deleted:', deletedFiles.join(', '));
	});


});