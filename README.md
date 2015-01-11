# QSTemplate

## En

<a href="https://github.com/bonkalol/QSTemplate">Grunt</a> Or <a href="https://github.com/bonkalol/QSTemplate-gulp">Gulp</a> version

QSTemplate it's a project template for quick start your web-project. it's based on 3 powerfull components.

1. <code>Jade</code
2. <code>SASS (SCSS)</code
3. <code>Gulp</code

## Navigation

1. <a href="#quick-start">Quick Start</a>

  1.1. <a href="#simple-way">Simple Way</a>

  1.2. <a href="#advance-way">Advance way<a>

2. <a href="#qstemplate-about">All about QSTemplate</a>

### Quick start

#### Simple way

Download archive from blinnikovbogdan.ru/QSTemplate/QSTemplate-gulp and run "npm install" in your terminal.

#### Advance way

Open your terminal and run

	git clone https://github.com/bonkalol/QSTemplate-gulp.git project
	rm -rf .git && rm readme.md
	git init
	git commit -m "init commit"
	git remote add origin https://github.com/username/reponame.git
	git push origin master
	npm install

After that you ready to go. Run gulp start and start write your code.

### QSTemplate About

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
	├── .bowerrc
	├── .gitignore
	├── gulpfile.js
	├── package.json
	├── README.md

An explanation of what is happening here:

#### dev/assets/

Assets are folder which must contain third-party js, font, css and other stuff... All that is contained in this folder
will be copied in <code>production/assets/</code> folder.

#### dev/data/

Data are folder which must contain data files, like .json. ll that is contained in this folder
will be copied in <code>production/data/</code> folder.

#### dev/font/

I think there is no need to explain. All files in this folder will be copied in <code>production/font/</code> folder.

#### dev/img/

Folder for images, all images in this folder will be minified and minified versions of this images will be copied in
<code>production/img/</code>

#### dev/img/sprite

Folder for sprite, image in this folder will be generated into <code>production/img/sprite.png</code>

#### dev/jade

Folder for pages in jade extension.

#### dev/jade/layouts

Contain all jade layouts.

#### dev/jade/meta

Contain all configs and helpers like mixins and vars.

#### dev/jade/partials

Contain all jade partials, like <code>nav.jade</code> / <code>head.jade</code>...

#### dev/js

Javascripts ^_^. <code>main.js</code> is a main file.

#### dev/js/partials

All .js files in this folder will be combined into <code>main.js</code>. Js files into this folder not independent files,
it's just a partials of main.js.

#### dev/js/third-party

<code>Third-party</code> scripts will be combined into main.js.

#### dev/js/libs

Files in libs folder will be copied in <code>production/js/libs</code>

#### dev/static

This folder must contain .html files, if u don't wanna use Jade, write your html in this folder,
this files will be copied in <code>production/</code>

### dev/scss

Еhis is a big topic, so it can be considered subsection.

<code>_config.scss</code> - contain all main configs. ( example 2. )

Example 2. Configs.

	$reset: true;
	$responsive: true;
	$borderBox: true;
	$fontSmooth: true;

<code>main.scss</code> - main file which include all imports.

#### base

base folder contain files like a <code>_reset.scss</code>, <code>_font.scss</code>, <code>_base.scss</code>, <code>_custom-reset.scss</code>.

#### meta

meta folder contain helpers and var. My lovely helper is a <code>_mq.scss</code>.

<code>_mq.scss</code> it's a mixin to write mediaqueris much easier. ( example 3. )

Example 3. MQ mixin in action.

	h1 {
		@include media ('>phone') {
			background-color: red;
		}

		@include media ('>phone', '>815px') {
			background-color: green;
		}

		@include media ("retina2x") {
			font-size: 40px;
		}
	}

#### project/components

This folder contain modules, like buttons, forms, inputs... Main file in this folder are _components.scss.
All components must be imported in <code>_components.scss</code>.

	@import
		'development',
		'typography',
		'buttons',
		'headings',
		'forms';

#### project/layout

Contain layout items, such like a footer, header... Main file in this folder <code>_layout.scss</code>.

#### project/pages

Contain some specific styles for the pages.

#### project

<code>_class.lib.scss</code> contains classes that will be used frequently.

<code>_project.scss</code> contain all imports from this folder.

<code>_sprite.scss</code> contain generated scss code to create sprite mixin.




## Ru

<a href="https://github.com/bonkalol/QSTemplate">Grunt</a> или <a href="https://github.com/bonkalol/QSTemplate-gulp">Gulp</a> версия