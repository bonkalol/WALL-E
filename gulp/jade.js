var gulp = require('gulp'),
	jade = require('gulp-jade'),
	newer = require('gulp-newer'),
	log = require('./errorHandler'),
	duration = require('gulp-duration'),
	colors = require('colors'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload,
	configs = require('./configs'),
	isProduction = configs.isProduction,
	paths = configs.paths,
	prettify = require('gulp-html-prettify'),
	notify = require('gulp-notify'),
	htmlvalidator = require('gulp-w3cjs'),
	plumber = require('gulp-plumber'),
	gutil = require('gulp-util'),
	useref = require('gulp-useref'),
	uglify = require('gulp-uglify'),
	cssmin = require('gulp-cssmin'),
	gulpif = require('gulp-if');

gulp.task('jade', function() {

	return gulp.src(paths.srcPaths.jade)
		.pipe(plumber({errorHandler: log}))
		.pipe(jade())
		.pipe(notify('File changed: dev/jade/<%= file.relative %>! Starting Jade.'))
		.pipe(duration('Finished jade task in'))
		.pipe(prettify({indent_char: '	', indent_size: 1})).on('error', log)
		.pipe(configs.htmlValidator ? htmlvalidator({doctype: 'HTML5', charset: 'utf-8'}) : gutil.noop())
		.pipe(duration('Finished prettify task in'))
		.pipe(reload({stream: true}))
		.pipe(notify('File created: ' + paths.destPaths.html + '<%= file.relative %>! Jade Finished.'))
		.pipe(gulp.dest(paths.destPaths.html));
});


gulp.task('buildUseref', function() {

	var assets = useref.assets();

	return gulp.src(paths.srcPaths.html)
		.pipe(assets)
		.pipe(gulpif('*.js', uglify()))
		.pipe(gulpif('*.css', cssmin()))
		.pipe(assets.restore())
		.pipe(useref())
		.pipe(gulp.dest(paths.destPaths.html));

});