module.exports = {

	isProduction: false,

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
			static: 'proudction/static',
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
			images: 'dev/img/**/*'
		}

	}

}