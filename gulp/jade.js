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
	plumber = require('gulp-plumber');

gulp.task('jade', function() {
	return gulp.src(paths.srcPaths.jade)
		.pipe(plumber({errorHandler: log}))
		.pipe(notify('File changed: dev/jade/<%= file.relative %>! Starting Jade.'))
		.pipe(jade())
		.pipe(duration('Finished jade task in'))
		.pipe(prettify({indent_char: '	', indent_size: 1})).on('error', log)
		.pipe(duration('Finished prettify task in'))
		.pipe(gulp.dest(paths.destPaths.html))
		.pipe(reload({stream: true}))
		.pipe(notify('File created: ' + paths.destPaths.html + '<%= file.relative %>! Jade Finished.'));
});

gulp.task('jadeNewer', function() {
	return gulp.src(paths.srcPaths.jade)
		.pipe(plumber({errorHandler: log}))
		.pipe(newer('./production/'))
		.pipe(duration('Finished jade task in'))
		.pipe(notify('File changed: dev/jade/<%= file.relative %>! Starting Jade.'))
		.pipe(jade())
		.pipe(prettify({indent_char: '	', indent_size: 1}))
		.pipe(configs.htmlValidator ? htmlvalidator({doctype: 'HTML5', charset: 'utf-8'}) : gutil.noop())
		.pipe(duration('Finished prettify task in'))
		.pipe(gulp.dest(paths.destPaths.html))
		.pipe(reload({stream: true}))
		.pipe(notify('File created: ' + paths.destPaths.html + ' <%= file.relative %>! Jade Finished.'));
});