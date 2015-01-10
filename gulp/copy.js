var gulp = require('gulp'),
	configs = require('./configs'),
	paths = configs.paths,
	newer = require('gulp-newer');

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
	.pipe(gulp.dest(paths.destPaths.data));
});

gulp.task('copyStatic', function() {
	return gulp.src(paths.srcPaths.static)
	.pipe(gulp.dest(paths.destPaths.static));
});

