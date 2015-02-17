module.exports = {

	isProduction: false,
	jshint: true,
	// set this var to true if u wanna validate your html
	// but be carefull, it takes a lot of compilation tome
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
			jade: './dev/jade/*.jade',
			scss: 'dev/scss/main.scss',
			js: ['./dev/js/third-party/**/*', './dev/js/partials/**/*', './dev/js/main.*+(js|coffee)'],
			jsLibs: 'dev/js/libs/**/*.js',
			sprite: 'dev/img/sprite/*.png',
			images: ['dev/img/**/*.+(png|jpg|svg)', '!dev/img/sprite/*'],
			font: 'dev/font/**/*.+(woff|woff2|svg|otf|ttf|eot)',
			static: 'dev/static/**/*',
			data: 'dev/data/**/*',
			assets: 'dev/assets/**/*'
		},

		destPaths: {
			html: './production/',
			css: 'production/css/',
			js: './production/js/',
			jsLibs: 'production/js/libs',
			images: 'production/img',
			webp: 'production/img/webp',
			font: 'production/font/',
			static: 'production/',
			data: 'production/data',
			assets: 'production/assets'
		},

		watchPaths: {
			jade: 'dev/jade/*.jade',
			jadePartials: ['dev/jade/partials/*.jade', 'dev/jade/layouts/*.jade', 'dev/jade/blocks/*.jade'],
			scss: 'dev/scss/**/*.scss',
			js: ['dev/js/**/*.*+(js|coffee)', '!dev/js/libs/'],
			jsLibs: 'dev/js/libs/**/*',
			fonts: 'dev/font/**/*.+(woff|woff2|svg|otf|ttf|eot)',
			sprite: 'dev/img/sprite/*.png',
			images: 'dev/img/**/*',
			static: 'dev/static/**/*',
			data: 'dev/data/**/*',
			assets: 'dev/assets/**/*'
		}

	}

}