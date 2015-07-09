var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	jshint = require('gulp-jshint'),
	stylish = require('jshint-stylish'),
	colors = require('colors'),
	gutil = require('gulp-util'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload,
	notify = require('gulp-notify'),
	isProduction = require('./configs').isProduction;
	duration = require('gulp-duration'),
	log = require('./errorHandler'),
	newer = require('gulp-newer'),
	configs = require('./configs'),
	paths = configs.paths,
	babel = require('gulp-babel'),
	argv = require('yargs').argv,
	plumber = require('gulp-plumber'),
	sourcemaps = require('gulp-sourcemaps');


// Concat all JS files into production/js/main.js
// If coffee disabled
gulp.task('concat', function() {
	return gulp.src(paths.srcPaths.js)
		.pipe(plumber({errorHandler: log}))
		.pipe(argv.es6 ? sourcemaps.init() : gutil.noop())
		.pipe(argv.es6 ? babel() : gutil.noop())
		.pipe(concat('app.js'))
		.pipe(isProduction ? uglify() : gutil.noop())
		.pipe(argv.es6 ? sourcemaps.write('/maps') : gutil.noop())
		.pipe(gulp.dest(paths.destPaths.js))
		.pipe(reload({stream: true}));
});


gulp.task('jshint', function() {

	if ( configs.jshint ) {
		return gulp.src(paths.srcPaths.js)
			.pipe(jshint({esnext: argv.es6 ? true : false}))
			.pipe(jshint.reporter(stylish));
	} else {
		console.log(('Jshint are disabled. Set variable in configs.js to true.').yellow);
		return;
	}

});