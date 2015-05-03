var gulp = require('gulp'),
	configs = require('./configs'),
	paths = configs.paths,
	newer = require('gulp-newer'),
	gulpif = require('gulp-if'),
	plumber = require('gulp-plumber'),
	jsonmin = require('gulp-jsonminify'),
	jsonlint = require('gulp-jsonlint'),
	gutil = require('gulp-util');

var reporter = function (file) {
	gutil.log(gutil.colors.red('File ' + file.path + ' is not a valid JSON.'));
};

gulp.task('copyFonts', function() {
	return gulp.src(paths.srcPaths.font)
	.pipe(gulp.dest(paths.destPaths.font));
});


gulp.task('copyLibs', function() {
	return gulp.src(paths.srcPaths.jsLibs)
	.pipe(gulp.dest(paths.destPaths.jsLibs));
});


gulp.task('copyAssets', function() {
	return gulp.src(paths.srcPaths.assets)
	.pipe(gulp.dest(paths.destPaths.assets));
});

gulp.task('copyData', function() {
	return gulp.src(paths.srcPaths.data)
	.pipe(plumber({errorHandler: log}))
	.pipe(gulpif(/[.]json$/, jsonmin()))
	.pipe(gulpif(/[.]json$/, jsonlint()))
	.pipe(gulpif(/[.]json$/, jsonlint.reporter(reporter)))
	.pipe(gulp.dest(paths.destPaths.data));
});

gulp.task('copyStatic', function() {
	return gulp.src(paths.srcPaths.static)
	.pipe(gulp.dest(paths.destPaths.static));
});

gulp.task('copyComponents', function() {
	return gulp.src(paths.srcPaths.components)
	.pipe(gulp.dest(paths.destPaths.components));
});

