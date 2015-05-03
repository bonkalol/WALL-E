var gulp = require('gulp'),
	newer = require('gulp-newer'),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant'),
	webp = require('gulp-webp'),
	configs = require('./configs'),
	gutil = require('gulp-util'),
	paths = configs.paths,
	log = require('./errorHandler'),
	plumber = require('gulp-plumber'),
	svgSprite = require('gulp-svg-sprite'),
	gulpFilter = require('gulp-filter');


var filter = gulpFilter(['*', '!*.svg']);

gulp.task('imagemin', function () {
	return gulp.src(paths.srcPaths.images)
		.pipe(plumber({errorHandler: log}))
		.pipe(newer(paths.destPaths.images))
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		}))
		.pipe(gulp.dest(paths.destPaths.images));
});

gulp.task('imagemin:all', function() {

	return gulp.src(paths.srcPaths.images)
		.pipe(plumber({errorHandler: log}))
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		}))
		.pipe(gulp.dest(paths.destPaths.images));

});

gulp.task('webp:newer', function() {

	return gulp.src(paths.srcPaths.webp)
		.pipe(plumber({errorHandler: log}))
		.pipe(newer(paths.destPaths.webp))
		.pipe(configs.webp ? webp() : gutil.noop())
		.pipe(configs.webp ? gulp.dest(paths.destPaths.webp) : gutil.noop());

});

gulp.task('webp:all', function() {

	return gulp.src(paths.srcPaths.webp)
		.pipe(plumber({errorHandler: log}))
		.pipe(configs.webp ? webp() : gutil.noop())
		.pipe(configs.webp ? gulp.dest(paths.destPaths.webp) : gutil.noop());

});

var svgConfigs = {

	mode: {
		symbol: true,
		inline: true,
		css: false
	},

	svg: {
		xmlDeclaration: false,
		doctypeDeclaration: false
	},

	dest: '.'

};

gulp.task('svgSprite', function() {

	return gulp.src(paths.srcPaths.svg)
		.pipe(plumber({errorHandler: log}))
		.pipe(svgSprite(svgConfigs))
		.pipe(gulp.dest('dist/img/'));
});