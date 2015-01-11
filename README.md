# QSTemplate
----------

## En

<a href="https://github.com/bonkalol/QSTemplate">Grunt</a> Or <a href="https://github.com/bonkalol/QSTemplate-gulp">Gulp</a> version

QSTemplate it's a project template for quick start your web-project. it's based on 3 powerfull components.

1. Jade
2. SASS (SCSS)
3. Gulp

QSTemplate also contain flexable project architecture. ( example 1. )

Example 1. Folder tree.

	├── dev
		├── assets
			├── docs.rm
			├── simple_headings.css
		├── data
			├── data.json
			├── autocomplete.json
		├── font
			├── OpenSans-reg.woff
			├── OpenSans-reg.woff2
		├── img
			├── sprite
				├── icon1.png
				├── icon2.png
			├── background.png
			├── background@retina.png
		├── jade
			├── layouts
				├── default.jade
			├── meta
				├── configs.jade
				├── mixins.jade
				├── svg-library.jade
				├── variables.jade
			├── partials
				├── debug.jade
				├── footer.jade
				├── head.jade
				├── header.jade
				├── nav.jade
			├── index.jade
		├── js
			├── libs
				├── page_search.js
			├── partials
				├── nav.js
				├── slider.js
				├── validation.js
				├── popup.js
			├── third-party
				├── slick.js
				├── fullpage.js
		├── scss
			├── base
				├── _base.scss
				├── _font.scss
				├── _reset.scss
			├── meta
				├── _funcLib.scss
				├── _mixins.scss
				├── _mq.scss
				├── _silent.classes.scss
				├── _variables.scss
			├── project
				├── components
					├── _button.scss
					├── _components.scss
					├── _development.scss
					├── _forms.scss
					├── _heading.scss
					├── _typography.scss
				├── cosmetic
					├── _animation.scss
				├── layout
					├── items
						├── _footer.scss
						├── _grid.scss
						├── _header.scss
						├── _nav.scss
					├── _layout.scss
				├── pages
					├── _index.scss
				├── _class.lib.scss
				├── _project.scss
				├── _sprite.scss
			├── third-party
				├── _slick.scss
			├── _config.scss
			├── main.scss
		├── static
			├── search.html
			├── cars.html
			├── profile.html
	├── production
		├── css
			├── main.css
			├── main.css.map
		├── font
			├── OpenSans-reg.woff
			├── OpenSans-reg.woff2
		├── js
			├── libs
				├── page_search.js
			main.js
		├── img
			├── sprite.png
			├── background.png
			├── background@retina.png
		├── assets
			├── docs.rm
			├── simple_headings.css
		├── data
			├── data.json
			├── autocomplete.json
		├── search.html ( from static )
		├── cars.html ( from static )
		├── profile.html ( from static )
		├── index.html ( index.jade )
	├── gulp
		├── gulpconfigs

## Navigation

1. Quick Start
1.1. Simple Way
1.2. Advance way

### Quick start

#### Simple way

Download archive from blinnikovbogdan.ru/QSTemplate/QSTemplate-gulp and run "npm install" in your terminal.

#### Advance way

Open your terminal and run

	git clone https://github.com/bonkalol/QSTemplate-gulp.git project
	rm -rf .git
	git init
	git commit -m "init commit"
	git remote add origin https://github.com/username/reponame.git
	git push origin master
	npm install

After that you ready to go. Run gulp start and start write your code.



## Ru

<a href="https://github.com/bonkalol/QSTemplate">Grunt</a> или <a href="https://github.com/bonkalol/QSTemplate-gulp">Gulp</a> версия