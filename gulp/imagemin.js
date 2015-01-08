var gulp = require('gulp'),
	newer = require('gulp-newer'),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant');


gulp.task('imagemin', function () {
	return gulp.src('dev/img/**/*.+(png|jpg)')
		.pipe(newer('production/img'))
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		}))
		.pipe(gulp.dest('production/img'));
});

gulp.task('imagemin:all', function() {

	return gulp.src('dev/img/**/*.+(png|jpg)')
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		}))
		.pipe(gulp.dest('production/img'));

});