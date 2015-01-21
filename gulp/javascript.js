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
	paths = configs.paths,
	coffee = require('gulp-coffee'),
	gulpFilter = require('gulp-filter'),
	coffeelint = require('gulp-coffeelint');


// Concat all JS files into production/js/main.js
// If coffee disabled
gulp.task('concat', function() {
	if (configs.coffee === true) { 
		var filterJs = gulpFilter(['**/*.js']),
			filterCoffee = gulpFilter(['**/*.coffee']);
	}
	return gulp.src(paths.srcPaths.js)
		.pipe(newer(paths.destPaths.js))
		// filter coffee
		.pipe(configs.coffee ? filterCoffee : gutil.noop())
		// js hint .js files
		.pipe(configs.jshint ? jshint() : gutil.noop())
		.pipe(configs.jshint ? jshint.reporter(stylish) : gutil.noop())
		// if coffee script === true
		.pipe(configs.coffee ? filterCoffee.restore() : gutil.noop())
		.pipe(configs.coffee ? filterJs : gutil.noop())
		.pipe(configs.coffee ? coffee({bare: true}) : gutil.noop()).on('error', log)
		.pipe(configs.coffee ? coffeelint() : gutil.noop())
		.pipe(configs.coffee ? coffeelint.reporter('default') : gutil.noop())
		.pipe(configs.coffee ? duration('Finished Coffee task in') : gutil.noop())
		.pipe(configs.coffee ? filterJs.restore() : gutil.noop())
		// defaults
		.pipe(concat('main.js')).on('error', log)
		.pipe(duration('Finished Concat task in'))
		.pipe(isProduction ? uglify() : gutil.noop())
		.pipe(isProduction ? duration('Finished Uglify task in') : gutil.noop())
		.pipe(gulp.dest(paths.destPaths.js));
});


gulp.task('jshint', function() {

	if ( configs.jshint ) {
		return gulp.src(paths.srcPaths.js)
			.pipe(jshint())
			.pipe(jshint.reporter(stylish));
	} else {
		console.log(('Jshint are disabled. Set variable in configs.js to true.').yellow);
		return;
	}

});