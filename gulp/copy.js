var gulp = require('gulp'),
	copy = require('gulp-copy'),
	configs = require('./configs'),
	paths = configs.paths;

gulp.task('copyFonts', function() {
	return gulp.src(paths.srcPaths.font)
	.pipe(gulp.dest(path.destPaths.font));
});


gulp.task('copyLibs', function() {
	return gulp.src(paths.srcPaths.jsLibs)
	.pipe(gulp.dest(path.destPaths.jsLibs));
});


gulp.task('copyAssets', function() {
	return gulp.src(paths.srcPaths.assets)
	.pipe(gulp.dest(path.destPaths.assets));
});

gulp.task('copyData', function() {
	return gulp.src(paths.srcPaths.data)
	.pipe(gulp.dest(path.destPaths.data));
});

gulp.task('copyStatic', function() {
	return gulp.src(paths.srcPaths.static)
	.pipe(gulp.dest(path.destPaths.static));
});

