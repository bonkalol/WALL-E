/* ==================================

GULP REQUIRE

===================================== */

var gulp = require('gulp'),
	sass = require('gulp-ruby-sass'),
	jade = require('gulp-jade'),
	watch = require('gulp-watch'),
	autoprefixer = require('gulp-autoprefixer'),
	copy = require('gulp-copy'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglifyjs'),
	jshint = require('gulp-jshint'),
	stylish = require('jshint-stylish'),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant'),
	spritesmith = require('gulp.spritesmith'),
	colors = require('colors'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload;

/* ==================================

GULP TASKS

===================================== */

gulp.task('default', function() {
	gulp.start([
		'jade',
		'sass',
		'jshint',
		'concat',
		'uglify',
		'imagemin'
		]);
});

gulp.task('compile', function() {
	gulp.start([
		'jade',
		'sass',
		'concat',
		]);
});


gulp.task('start', function() {

	gulp.start([
		'browser-sync',
		'watch'
		]);

});
/* ==================================

GLOBAL VARIABLES

===================================== */



/* ==================================

FUNCTIONS

===================================== */

function log(error) {

	console.log(("[" + error.name + " in " + error.plugin + "]").red.bold.inverse,
	error.message + "]");

};

/* ==================================

GULP LOADED TASKS

===================================== */

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: "./production"
		}
	});
});

gulp.task('jade', function() {
	gulp.src('./dev/jade/*.jade')
		.pipe(jade())
		.on('error', log)
		.pipe(gulp.dest('./production/'))
		.pipe(reload({stream: true}));
});

gulp.task('sass', function () {
	return gulp.src('dev/scss/main.scss')
		.pipe(sass({
			style: 'compact'
		}))
		.on('error', log)
		.pipe(autoprefixer({
			// More about browser: https://github.com/postcss/autoprefixer#browsers
			browsers: ['ie 10', 'last 2 versions'],
			cascade: true
		}))
		.pipe(gulp.dest('production/css/'))
		.pipe(reload({stream: true}));
});

// Concat all JS files into production/js/main.js
gulp.task('concat', function() {
	gulp.src(['./dev/js/jquery-2.1.1.min.js','./dev/js/third-party/*.js', './dev/js/main.js'])
		.pipe(concat('main.js'))
		.pipe(jshint())
		.pipe(jshint.reporter(stylish))
		.pipe(gulp.dest('./production/js/'));
});

var uglify = require('gulp-uglifyjs');

gulp.task('uglify', function() {
	gulp.src('production/js/main.js')
		.pipe(uglify())
		.pipe(gulp.dest('production/js/min'));
});


gulp.task('jshint', function() {
	return gulp.src('./dev/js/main.js')
		.pipe(jshint())
		.pipe(jshint.reporter(stylish));
});


gulp.task('imagemin', function () {
	return gulp.src('dev/img/*.{png,jpg}')
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		}))
		.pipe(gulp.dest('production/img'));
});

// Sprite Smith
gulp.task('sprite', function () {
	gulp.src('dev/img/sprite/*.png').pipe(spritesmith({
		imgName: 'sprite.png',
		cssName: '../../dev/scss/project/_sprite.scss',
		imgPath: '../img/sprite.png'
	}))
	.on('error', log)
	.pipe(gulp.dest('production/img/'));
});


// Copy Fonts
gulp.task('copyFonts', function(){
	return gulp.src('dev/font/*.{svg,eot,woff,woff2,otf,ttf}')
	.pipe(gulp.dest('production/font/'));
});


/* ==================================

GULP WATCH

===================================== */

gulp.task('watch', function () {
	// scss watcher
	watch('dev/scss/**/*.scss', function (files, cb) {
		gulp.start('sass', cb);
	});
	// jade watcher
	watch('dev/jade/*.jade', function (files, cb) {
		gulp.start('jade', cb);
	});
	// js watcher
	watch('dev/js/**/*.js', function (files, cb) {
		gulp.start('concat', cb);
	});
	// fonts watcher
	watch('dev/font/*', function (files, cb) {
		gulp.start('copyFonts', cb);
	});
	// sprite watcher
	watch('dev/img/sprite/*.png', function (files, cb) {
		gulp.run('sprite', 'sass');
	});
	// minimage watcher
	watch('dev/img/*', function(files, cb) {
		gulp.start('imagemin', cb);
	});

});