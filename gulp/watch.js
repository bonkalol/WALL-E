var gulp = require('gulp'),
	changeEvent = require('./changeEvent'),
	watch = require('gulp-watch'),
	configs = require('./configs'),
	paths = configs.paths,
	watch = paths.watchPaths;



gulp.task('watch', function () {
	console.log(typeof watch.scss);
	// scss watcher
	watch(watch.scss, function (files, cb) {
		gulp.start('sass', cb);
	}).on('change', function(event) {
		changeEvent(event)
	});
	// jade watcher
	watch(watch.jade, function (files, cb) {
		gulp.start('jadeNewer', cb);
	}).on('change', function(event) {
		changeEvent(event)
	});
	watch(watch.jadePartials, function (files, cb) {
		gulp.start('jade', cb);
	}).on('change', function(event) {
		changeEvent(event)
	});
	// js watcher
	watch(watch.js, function (files, cb) {
		gulp.start('concat', cb);
	}).on('change', function(event) {
		changeEvent(event)
	});
	// sprite watcher
	watch(watch.sprite, function (files, cb) {
		gulp.run('sprite', 'sass');
	}).on('change', function(event) {
		changeEvent(event)
	});
	// minimage watcher
	watch(watch.images, function(files, cb) {
		gulp.start('imagemin', cb);
	}).on('change', function(event) {
		changeEvent(event)
	});

	// stuff watcher
	// js libs watcher
	watch(watch.jsLibs, function (files, cb) {
		gulp.start('copyLibs', cb);
	}).on('change', function(event) {
		changeEvent(event)
	});
	// fonts watcher
	watch(watch.fonts, function (files, cb) {
		gulp.start('copyFonts', cb);
	}).on('change', function(event) {
		changeEvent(event)
	});

});