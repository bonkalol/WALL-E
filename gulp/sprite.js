var gulp = require('gulp'),
	log = require('./errorHandler'),
	spritesmith = require('gulp.spritesmith'),
	configs = require('./configs'),
	paths = configs.paths;

// Sprite Smith
gulp.task('sprite', function () {
	return gulp.src(paths.scrPaths.sprite).pipe(spritesmith({
		imgName: 'sprite.png',
		cssName: '../../dev/scss/project/_sprite.scss',
		imgPath: '../img/sprite.png'
	}))
	.on('error', log)
	.pipe(gulp.dest(paths.destPaths.images));
});