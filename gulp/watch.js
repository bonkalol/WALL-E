var gulp = require('gulp'),
	changeEvent = require('./changeEvent'),
	watch = require('gulp-watch');


gulp.task('watch', function () {
	// scss watcher
	watch('dev/scss/**/*.scss', function (files, cb) {
		gulp.start('sass', cb);
	}).on('change', function(event) {
		changeEvent(event)
	});
	// jade watcher
	watch('dev/jade/*.jade', function (files, cb) {
		gulp.start('jadeNewer', cb);
	}).on('change', function(event) {
		changeEvent(event)
	});
	watch(['dev/jade/partials/*.jade', 'dev/jade/layouts/*.jade'], function (files, cb) {
		gulp.start('jade', cb);
	}).on('change', function(event) {
		changeEvent(event)
	});
	// js watcher
	watch('dev/js/**/*.js', function (files, cb) {
		gulp.start('concat', cb);
	}).on('change', function(event) {
		changeEvent(event)
	});
	// js libs watcher
	watch('dev/js/libs/**/*.js', function (files, cb) {
		gulp.start('copyLibs', cb);
	}).on('change', function(event) {
		changeEvent(event)
	});
	// fonts watcher
	watch('dev/font/**/*.+(woff|woff2|svg|otf|ttf|eot)', function (files, cb) {
		gulp.start('copyFonts', cb);
	}).on('change', function(event) {
		changeEvent(event)
	});
	// sprite watcher
	watch('dev/img/sprite/*.png', function (files, cb) {
		gulp.run('sprite', 'sass');
	}).on('change', function(event) {
		changeEvent(event)
	});
	// minimage watcher
	watch('dev/img/**/*', function(files, cb) {
		gulp.start('imagemin', cb);
	}).on('change', function(event) {
		changeEvent(event)
	});

});