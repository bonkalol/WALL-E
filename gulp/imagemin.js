var gulp = require('gulp'),
	newer = require('gulp-newer'),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant'),
	webp = require('gulp-webp'),
	configs = require('./configs'),
	gutil = require('gulp-util');


gulp.task('imagemin', function () {
	return gulp.src('dev/img/**/*.+(png|jpg)')
		.pipe(newer('production/img'))
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		}))
		.pipe(gulp.dest('production/img'))
		.pipe(configs.webp ? webp() : gutil.noop())
		.pipe(configs.webp ? gulp.dest('production/img/webp') : gutil.noop());
});

gulp.task('imagemin:all', function() {

	return gulp.src('dev/img/**/*.+(png|jpg)')
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		}))
		.pipe(gulp.dest('production/img'))
		.pipe(configs.webp ? webp() : gutil.noop())
		.pipe(configs.webp ? gulp.dest('production/img/webp') : gutil.noop());

});