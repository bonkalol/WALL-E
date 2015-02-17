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
	coffeelint = require('gulp-coffeelint'),
	gulpif = require('gulp-if'),
	plumber = require('gulp-plumber');


// Concat all JS files into production/js/main.js
// If coffee disabled
gulp.task('concat', function() {
	return gulp.src(paths.srcPaths.js)
		.pipe(plumber({errorHandler: log}))
		.pipe(newer(paths.destPaths.js))
		.pipe(gulpif(/[.]coffee$/, coffee()))
		.pipe(gulpif(/[.]coffee$/, coffeelint()))
		.pipe(concat('main.js'))
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