var gulp = require('gulp'),
	sass = require('gulp-ruby-sass'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload,
	autoprefixer = require('gulp-autoprefixer'),
	cssmin = require('gulp-cssmin'),
	gutil = require('gulp-util'),
	notify = require('gulp-notify'),
	duration = require('gulp-duration'),
	log = require('./errorHandler'),
	isProduction = require('./configs').isProduction;


gulp.task('sass', function () {
	return gulp.src('dev/scss/main.scss')
		.pipe(notify('File changed: dev/scss/<%= file.relative %>! Starting SASS.'))
		.pipe(sass({
			style: 'expanded',
			sourcemap: true,
			sourcemapPath: 'production/css/source'
		}))
		.pipe(duration('Finished SASS task in'))
		.on('error', log)
		.pipe(autoprefixer({
			// More about browser: https://github.com/postcss/autoprefixer#browsers
			browsers: ['ie 10', 'last 2 versions'],
			cascade: true
		}))
		.pipe(duration('Finished Autoprefixer task in'))
		.pipe(isProduction ? cssmin() : gutil.noop())
		.pipe(isProduction ? duration('Finished CssMin task in') : gutil.noop())
		.pipe(gulp.dest('production/css/'))
		.pipe(reload({stream: true}))
		.pipe(notify('File created: production/css/<%= file.relative %>! SASS Finished.'));
});