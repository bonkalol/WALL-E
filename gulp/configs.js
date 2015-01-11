module.exports = {

	isProduction: false,

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
	}

	paths: {

		srcPaths: {
			jade: './dev/jade/*.jade',
			scss: 'dev/scss/main.scss',
			js: ['./dev/js/jquery-2.1.1.min.js', './dev/js/third-party/*.js', './dev/js/partials/*.js', './dev/js/main.js'],
			jsLibs: 'dev/js/libs/**/*.js',
			images: 'dev/img/**/*.+(png|jpg)',
			font: 'dev/font/**/*.+(woff|woff2|svg|otf|ttf|eot)',
			static: 'dev/static',
			data: 'dev/data',
			assets: 'dev/assets'
		},

		destPaths: {
			html: './production/',
			css: 'production/css/',
			js: './production/js/',
			jsLibs: 'production/js/libs',
			img: 'production/img',
			font: 'production/font/',
			static: 'proudction/',
			data: 'production/data',
			assets: 'production/assets'
		},

		watchPaths: {
			jade: 'dev/jade/*.jade',
			jadePartials: ['dev/jade/partials/*.jade', 'dev/jade/layouts/*.jade'],
			scss: 'dev/scss/**/*.scss',
			js: 'dev/js/**/*.js',
			jsLibs: 'dev/js/libs/**/*.js',
			fonts: 'dev/font/**/*.+(woff|woff2|svg|otf|ttf|eot)',
			sprite: 'dev/img/sprite/*.png',
			images: 'dev/img/**/*',
			static: 'dev/static/**/*',
			data: 'dev/data/**/*',
			assets: 'dev/assets/**/*'
		}

	}

}