var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload,
	autoprefixerPipe = require('gulp-autoprefixer'),
	cssmin = require('gulp-cssmin'),
	gutil = require('gulp-util'),
	notify = require('gulp-notify'),
	duration = require('gulp-duration'),
	log = require('./errorHandler'),
	colors = require('colors'),
	configs = require('./configs'),
	configsSass = configs.sass,
	autoprefixer = configs.autoprefixer,
	isProduction = configs.isProduction,
	paths = configs.paths,
	sourcemaps = require('gulp-sourcemaps'),
	plumber = require('gulp-plumber');

gulp.task('sass', function () {
	return gulp.src(paths.srcPaths.scss)
		.pipe(plumber({errorHandler: log}))
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(sourcemaps.write())
		.pipe(duration('Finished SASS task in'))
		.pipe(autoprefixerPipe({
			browsers: [
				'Android >= ' + autoprefixer.android,
				'Chrome >= ' + autoprefixer.chrome,
				'Firefox >= ' + autoprefixer.firefox,
				'Explorer >= ' + autoprefixer.ie,
				'iOS >= ' + autoprefixer.ios,
				'Opera >= ' + autoprefixer.opera,
				'Safari >= ' + autoprefixer.safari
			],
			cascade: true
		}))
		.pipe(duration('Finished Autoprefixer task in'))
		.pipe(isProduction ? cssmin() : gutil.noop())
		.pipe(isProduction ? duration('Finished CssMin task in') : gutil.noop())
		.pipe(notify('File created: ' + paths.destPaths.css + '<%= file.relative %>! SASS Finished.'))
		.pipe(gulp.dest(paths.destPaths.css))
		.pipe(reload({stream: true}));
});