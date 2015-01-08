var gulp = require('gulp'),
	jade = require('gulp-jade'),
	newer = require('gulp-newer'),
	log = require('./errorHandler'),
	duration = require('gulp-duration'),
	colors = require('colors'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload,
	isProduction = require('./configs').isProduction;
	prettify = require('gulp-html-prettify'),
	notify = require('gulp-notify');

gulp.task('jade', function() {
	gulp.src('./dev/jade/*.jade')
		.pipe(notify('File changed: dev/jade/<%= file.relative %>! Starting Jade.'))
		.pipe(jade())
		.pipe(duration('Finished jade task in'))
		.on('error', log)
		.pipe(prettify({indent_char: '	', indent_size: 1}))
		.pipe(duration('Finished prettify task in'))
		.pipe(gulp.dest('./production/'))
		.pipe(reload({stream: true}))
		.pipe(notify('File created: production/<%= file.relative %>! Jade Finished.'));
});

gulp.task('jadeNewer', function() {
	gulp.src('./dev/jade/*.jade')
		.pipe(newer('./production/'))
		.pipe(duration('Finished jade task in'))
		.pipe(notify('File changed: dev/jade/<%= file.relative %>! Starting Jade.'))
		.pipe(jade())
		.on('error', log)
		.pipe(prettify({indent_char: '	', indent_size: 1}))
		.pipe(duration('Finished prettify task in'))
		.pipe(gulp.dest('./production/'))
		.pipe(reload({stream: true}))
		.pipe(notify('File created: production/<%= file.relative %>! Jade Finished.'));
});