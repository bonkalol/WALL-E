var gulp = require('gulp'),
	changeEvent = require('./changeEvent'),
	watch = require('gulp-watch'),
	configs = require('./configs'),
	paths = configs.paths,
	watchPath = paths.watchPaths;


gulp.task('watch', function () {

	// scss watcher
	watch(watchPath.scss, function (files, cb) {
		gulp.start('sass', cb);
	}).on('change', function(event) {
		changeEvent(event)
	});
	// jade watcher
	watch(watchPath.jade, function (files, cb) {
		gulp.start('jade', cb);
	}).on('change', function(event) {
		changeEvent(event)
	});
	watch(watchPath.jadePartials, function (files, cb) {
		gulp.start('jade', cb);
	}).on('change', function(event) {
		changeEvent(event)
	});
	// js watcher
	watch(watchPath.js, function (files, cb) {
		gulp.start('concat', cb);
	}).on('change', function(event) {
		changeEvent(event)
	});
	// sprite watcher
	watch(watchPath.sprite, function (files, cb) {
		gulp.run('sprite', 'sass');
	}).on('change', function(event) {
		changeEvent(event)
	});
	// minimage watcher
	watch(watchPath.images, function(files, cb) {
		gulp.start('imagemin', cb);
	}).on('change', function(event) {
		changeEvent(event)
	});

	// copy stuff watcher
	// js libs watcher
	watch(watchPath.jsLibs, function (files, cb) {
		gulp.start('copyLibs', cb);
	}).on('change', function(event) {
		changeEvent(event)
	});
	// fonts watcher
	watch(watchPath.fonts, function (files, cb) {
		gulp.start('copyFonts', cb);
	}).on('change', function(event) {
		changeEvent(event)
	});
	// assets
	watch(watchPath.assets, function (files, cb) {
		gulp.start('copyAssets', cb);
	}).on('change', function(event) {
		changeEvent(event)
	});
	// static
	watch(watchPath.static, function (files, cb) {
		gulp.start('copyStatic', cb);
	}).on('change', function(event) {
		changeEvent(event)
	});
	// static
	watch(watchPath.data, function (files, cb) {
		gulp.start('copyData', cb);
	}).on('change', function(event) {
		changeEvent(event)
	});

});