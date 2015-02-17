var gulp = require('gulp'),
	watch = require('gulp-watch'),
	configs = require('./configs'),
	paths = configs.paths,
	watchPath = paths.watchPaths;


gulp.task('watch', function () {

	watch(watchPath.scss, function () {
		gulp.start('sass');
	});
	// jade watcher
	watch(watchPath.jade, function () {
		gulp.start('jade');
	});
	watch(watchPath.jadePartials, function () {
		gulp.start('jade');
	});
	// js watcher
	watch(watchPath.js, function () {
		gulp.start('concat');
	});
	// sprite watcher
	watch(watchPath.sprite, function () {
		gulp.start('build-sprite');
	});
	// minimage watcher
	watch(watchPath.images, function() {
		gulp.start('imagemin');
	});
	// copy stuff watcher
	// js libs watcher
	watch(watchPath.jsLibs, function () {
		gulp.start('copyLibs');
	});
	// fonts watcher
	watch(watchPath.fonts, function () {
		gulp.start('copyFonts');
	});
	// assets
	watch(watchPath.assets, function () {
		gulp.start('copyAssets');
	});
	// static
	watch(watchPath.static, function () {
		gulp.start('copyStatic');
	});
	// static
	watch(watchPath.data, function () {
		gulp.start('copyData');
	});

});