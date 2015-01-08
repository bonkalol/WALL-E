var gulp = require('gulp'),
	copy = require('gulp-copy');

gulp.task('copyFonts', function() {
	return gulp.src('dev/font/**/*.+(woff|woff2|svg|otf|ttf|eot)')
	.pipe(gulp.dest('production/font/'));
});


gulp.task('copyLibs', function() {
	return gulp.src('dev/js/libs/**/*.js')
	.pipe(gulp.dest('production/js/libs'));
});