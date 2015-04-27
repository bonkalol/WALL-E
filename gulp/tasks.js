var gulp = require('gulp');

gulp.task('default', function(callback) {

	gulp.run('build');

});

gulp.task('build', function(callback) {

	gulp.run('clean', 'sprite', 'jade', 'sass', 'checkCss', 'concat', 'copyStuff', 'imagemin:all');

});

gulp.task('build-sprite', function(callback) {

	gulp.run('sprite', 'sass');

});

gulp.task('compile', function() {

	gulp.run('jade', 'sass', 'concat');

});


gulp.task('start', function() {

	gulp.run('browser-sync', 'watch');

});


gulp.task('copyStuff', function() {

	gulp.run('copyFonts', 'copyLibs', 'copyAssets', 'copyComponents', 'copyData', 'copyStatic');

});