var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglifyjs'),
	jshint = require('gulp-jshint'),
	stylish = require('jshint-stylish'),
	colors = require('colors'),
	gutil = require('gulp-util'),
	notify = require('gulp-notify'),
	isProduction = require('./configs').isProduction;
	duration = require('gulp-duration'),
	log = require('./errorHandler'),
	newer = require('gulp-newer'),
	configs = require('./configs'),
	paths = configs.paths;


// Concat all JS files into production/js/main.js
gulp.task('concat', function() {
	return gulp.src(paths.srcPaths.js)
		.pipe(newer(paths.destPaths.js))
		.pipe(notify('File changed: dev/js/<%= file.relative %>! Starting Concat.'))
		.pipe(jshint())
		.pipe(jshint.reporter(stylish))
		.pipe(concat('main.js'))
		.pipe(duration('Finished Concat task in'))
		.pipe(isProduction ? uglify() : gutil.noop())
		.pipe(isProduction ? duration('Finished Uglify task in') : gutil.noop())
		.pipe(gulp.dest(paths.destPaths.js))
		.pipe(notify('File created: ' + paths.destPaths.js + ' <%= file.relative %>! Concat Finished'));
});


gulp.task('jshint', function() {
	return gulp.src('./dev/js/main.js')
		.pipe(jshint())
		.pipe(jshint.reporter());
});