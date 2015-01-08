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
	newer = require('gulp-newer');


// Concat all JS files into production/js/main.js
gulp.task('concat', function() {
	gulp.src(['./dev/js/jquery-2.1.1.min.js','./dev/js/third-party/*.js', './dev/js/partials/*.js', './dev/js/main.js'])
		.pipe(newer('./production/js/'))
		.pipe(notify('File changed: dev/js/<%= file.relative %>! Starting Concat.'))
		.pipe(jshint())
		.pipe(jshint.reporter(stylish))
		.pipe(concat('main.js'))
		.pipe(duration('Finished Concat task in'))
		.pipe(isProduction ? uglify() : gutil.noop())
		.pipe(isProduction ? duration('Finished Uglify task in') : gutil.noop())
		.pipe(gulp.dest('./production/js/'))
		.pipe(notify('File created: production/js/<%= file.relative %>! Concat Finished'));
});


gulp.task('jshint', function() {
	return gulp.src('./dev/js/main.js')
		.pipe(jshint())
		.pipe(jshint.reporter());
});