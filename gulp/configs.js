module.exports = {

	isProduction: true,
	jshint: true,
	// set this var to true if u wanna validate your html
	// but be carefull, it takes a lot of compilation time
	htmlValidator: false,
	webp: true,

	autoprefixer: {
		android: 4,
		chrome: 36,
		firefox: 31,
		ie: 10,
		ios: 6,
		opera: 15,
		safari: 7
	},

	sass: {
		style: 'expanded',
		sourcemap: true
	},

	paths: {

		srcPaths: {
			jade: 'app/jade/*.jade',
			html: 'dist/*.html',
			scss: 'app/scss/app.scss',
			js: ['./app/js/modules/**/*', './app/js/common.js'],
			jsLibs: 'app/js/libs/**/*.js',
			sprite: 'app/img/sprite/*.png',
			images: ['app/img/**/*.+(png|jpg|svg|webp)', '!app/img/sprite/*', '!*.crdownload', '!app/img/images/*'],
			webp: ['app/img/**/*.+(png|jpg|webp)', '!app/img/sprite/*', '!app/img/images/*', '!app/img/svg'],
			svg: 'app/img/svg/*.svg',
			font: 'app/font/**/*.+(woff|woff2|svg|otf|ttf|eot)',
			static: ['app/static/**/*', 'app/static/.htaccess'],
			data: 'app/data/**/*',
			assets: 'app/assets/**/*',
			components: 'app/components/**/*'
		},

		destPaths: {
			html: 'dist/',
			css: 'dist/css/',
			js: './dist/js/',
			jsLibs: 'dist/js/libs',
			images: 'dist/img',
			webp: 'dist/img/webp',
			font: 'dist/font/',
			static: 'dist/',
			data: 'dist/data',
			assets: 'dist/assets',
			components: 'dist/components/'
		},

		watchPaths: {
			jade: 'app/jade/*.jade',
			jadePartials: ['app/jade/partials/*.jade', 'app/jade/layouts/*.jade', 'app/jade/blocks/*.jade'],
			scss: 'app/scss/**/*.scss',
			js: ['app/js/**/*.*+(js|coffee)', '!app/js/libs/'],
			jsLibs: 'app/js/libs/**/*',
			fonts: 'app/font/**/*.+(woff|woff2|svg|otf|ttf|eot)',
			sprite: 'app/img/sprite/*.png',
			images: 'app/img/**/*.+(png|jpg|svg|webp)',
			webp: ['app/img/**/*.+(png|jpg|webp)', '!app/img/sprite/*', '!app/img/images/*', '!app/img/svg'],
			svg: 'app/img/svg/*.svg',
			static: 'app/static/**/*',
			data: 'app/data/**/*',
			assets: 'app/assets/**/*',
			components: 'app/components/**/*'
		}

	}

}