var gulp = require('gulp'),
	newer = require('gulp-newer'),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant'),
	webp = require('gulp-webp'),
	configs = require('./configs'),
	gutil = require('gulp-util'),
	paths = configs.paths;


gulp.task('imagemin', function () {
	return gulp.src(paths.srcPaths.images)
		.pipe(newer(paths.destPaths.images))
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		}))
		.pipe(gulp.dest(paths.destPaths.images))
		.pipe(configs.webp ? webp() : gutil.noop())
		.pipe(configs.webp ? gulp.dest(paths.destPaths.webp) : gutil.noop());
});

gulp.task('imagemin:all', function() {

	return gulp.src(paths.srcPaths.images)
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		}))
		.pipe(gulp.dest(paths.destPaths.images))
		.pipe(configs.webp ? webp() : gutil.noop())
		.pipe(configs.webp ? gulp.dest(paths.destPaths.webp) : gutil.noop());

});