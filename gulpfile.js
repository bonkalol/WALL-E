require('require-dir')('./gulp/', {recurse: true});

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
	spritesmith = require('gulp.spritesmith'),
	colors = require('colors'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload,
	newer = require('gulp-newer'),
	gutil = require('gulp-util'),
	cssmin = require('gulp-cssmin'),
	prettify = require('gulp-html-prettify'),
	clean = require('gulp-clean'),
	notify = require('gulp-notify'),
	duration = require('gulp-duration');

/* ==================================

DEFAULTS

===================================== */
var isProduction = false;


/* ==================================

GULP TASKS

===================================== */

gulp.task('default', function() {
	gulp.start([
		'clean',
		'jade',
		'sass',
		'concat',
		'copyLibs',
		'copyFonts',
		'imagemin:all',
		'start'
		]);
});

gulp.task('compile', function() {
	gulp.start([
		'jade',
		'sass',
		'concat'
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

function changeEvent(event) {

	console.log(
		'[watcher] File ' + event.path.replace(/.*(?=assets)/,'') + ' was ' + event.type + ', compiling...'
	);

}

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
		.pipe(notify('File changed: dev/jade/<%= file.relative %>! Starting Jade.'))
		.pipe(jade())
		.pipe(duration('Finished jade task in'))
		.on('error', log)
		.pipe(prettify({indent_char: '	', indent_size: 1}))
		.pipe(duration('Finished prettify task in'))
		.pipe(gulp.dest('./production/'))
		.pipe(reload({stream: true}))
		.pipe(notify('File created: production/<%= file.relative %>! Jade Finished.'));
});

gulp.task('jadeNewer', function() {
	gulp.src('./dev/jade/*.jade')
		.pipe(newer('./production/'))
		.pipe(duration('Finished jade task in'))
		.pipe(notify('File changed: dev/jade/<%= file.relative %>! Starting Jade.'))
		.pipe(jade())
		.on('error', log)
		.pipe(prettify({indent_char: '	', indent_size: 1}))
		.pipe(duration('Finished prettify task in'))
		.pipe(gulp.dest('./production/'))
		.pipe(reload({stream: true}))
		.pipe(notify('File created: production/<%= file.relative %>! Jade Finished.'));
});

gulp.task('sass', function () {
	return gulp.src('dev/scss/main.scss')
		.pipe(notify('File changed: dev/scss/<%= file.relative %>! Starting SASS.'))
		.pipe(sass({
			style: 'expanded',
			sourcemap: true,
			sourcemapPath: 'production/css/source'
		}))
		.pipe(duration('Finished SASS task in'))
		.on('error', log)
		.pipe(autoprefixer({
			// More about browser: https://github.com/postcss/autoprefixer#browsers
			browsers: ['ie 10', 'last 2 versions'],
			cascade: true
		}))
		.pipe(duration('Finished Autoprefixer task in'))
		.pipe(isProduction ? cssmin() : gutil.noop())
		.pipe(isProduction ? duration('Finished CssMin task in') : gutil.noop())
		.pipe(gulp.dest('production/css/'))
		.pipe(reload({stream: true}))
		.pipe(notify('File created: production/css/<%= file.relative %>! SASS Finished.'));
});

// Concat all JS files into production/js/main.js
gulp.task('concat', function() {
	gulp.src(['./dev/js/jquery-2.1.1.min.js','./dev/js/third-party/*.js', './dev/js/partials/*.js', './dev/js/main.js'])
		.pipe(newer('./production/js/'))
		.pipe(notify('File changed: dev/js/<%= file.relative %>! Starting Concat.'))
		.pipe(jshint())
		.pipe(jshint.reporter(stylish))
		.pipe(concat('main.js'))
		.pipe(duration('Finished Concat task in'))
		.pipe(isProduction ? uglify() : gutil.noop())
		.pipe(isProduction ? duration('Finished Uglify task in') : gutil.noop())
		.pipe(gulp.dest('./production/js/'))
		.pipe(notify('File created: production/js/<%= file.relative %>! Concat Finished'));
});


gulp.task('jshint', function() {
	return gulp.src('./dev/js/main.js')
		.pipe(jshint())
		.pipe(jshint.reporter());
});


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


// copy assets
gulp.task('copyFonts', function() {
	return gulp.src('dev/font/**/*.+(woff|woff2|svg|otf|ttf|eot)')
	.pipe(gulp.dest('production/font/'));
});


gulp.task('copyLibs', function() {
	return gulp.src('dev/js/libs/**/*.js')
	.pipe(gulp.dest('production/js/libs'));
});



// clean production
gulp.task('clean', function() {

	return gulp.src(['production/css', 'production/*.html', 'production/js', 'production/img', 'production/font', 'production/data'], {read: false, force: true})
	.pipe(clean())
	.on('error', log);

});


/* ==================================

GULP WATCH

===================================== */

gulp.task('watch', function () {
	// scss watcher
	watch('dev/scss/**/*.scss', function (files, cb) {
		gulp.start('sass', cb);
	}).on('change', function(event) {
		changeEvent(event)
	});
	// jade watcher
	watch('dev/jade/*.jade', function (files, cb) {
		gulp.start('jadeNewer', cb);
	}).on('change', function(event) {
		changeEvent(event)
	});
	watch(['dev/jade/partials/*.jade', 'dev/jade/layouts/*.jade'], function (files, cb) {
		gulp.start('jade', cb);
	}).on('change', function(event) {
		changeEvent(event)
	});
	// js watcher
	watch('dev/js/**/*.js', function (files, cb) {
		gulp.start('concat', cb);
	}).on('change', function(event) {
		changeEvent(event)
	});
	// js libs watcher
	watch('dev/js/libs/**/*.js', function (files, cb) {
		gulp.start('copyLibs', cb);
	}).on('change', function(event) {
		changeEvent(event)
	});
	// fonts watcher
	watch('dev/font/**/*.+(woff|woff2|svg|otf|ttf|eot)', function (files, cb) {
		gulp.start('copyFonts', cb);
	}).on('change', function(event) {
		changeEvent(event)
	});
	// sprite watcher
	watch('dev/img/sprite/*.png', function (files, cb) {
		gulp.run('sprite', 'sass');
	}).on('change', function(event) {
		changeEvent(event)
	});
	// minimage watcher
	watch('dev/img/**/*', function(files, cb) {
		gulp.start('imagemin', cb);
	}).on('change', function(event) {
		changeEvent(event)
	});

});