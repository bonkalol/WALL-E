

var gulp = require('gulp'),
	log = require('./errorHandler'),
	spritesmith = require('gulp.spritesmith');

// Sprite Smith
gulp.task('sprite', function () {
	gulp.src('dev/img/sprite/*.+(png)').pipe(spritesmith({
		imgName: 'sprite.png',
		cssName: '../../dev/scss/project/_sprite.scss',
		imgPath: '../img/sprite.png'
	}))
	.on('error', log)
	.pipe(gulp.dest('production/img/'));
});