var gulp = require('gulp'),
	log = require('./errorHandler'),
	spritesmith = require('gulp.spritesmith'),
	configs = require('./configs'),
	paths = configs.paths,
	plumber = require('gulp-plumber');

// Sprite Smith
gulp.task('sprite', function () {
	// Generate our spritesheet
	return gulp.src(paths.srcPaths.sprite)
	.pipe(spritesmith({
		imgName: 'sprite.png',
		cssName: '../../dev/scss/project/_sprite.scss',
		imgPath: '../img/sprite.png'
	}))
	.pipe(plumber({errorHandler: log}))
	.pipe(gulp.dest(paths.destPaths.images));
});