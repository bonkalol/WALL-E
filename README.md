# QSTemplate

<a href="#en">EN</a> or <a href="#ru">RU</a>

## En

<a href="https://github.com/bonkalol/QSTemplate">Grunt</a> Or <a href="https://github.com/bonkalol/QSTemplate-gulp">Gulp</a> version

QSTemplate it's a project template for quick start your web-project. it's based on 3 powerfull components.

1. <code>Jade</code>
2. <code>SASS (SCSS)</code>
3. <code>Gulp</code>

## Navigation

1. <a href="#quick-start">Quick Start</a>

  1.1. <a href="#simple-way">Simple Way</a>

  1.2. <a href="#advance-way">Advance way<a>

2. <a href="#qstemplate-about">All about QSTemplate</a>

3. <a href="#possible-problems">Possible problems</a>

### Quick start

#### Simple way

Download archive from 
<a href="http://blinnikovbogdan.ru/QSTemplate/QSTemplate-gulp.zip">http://blinnikovbogdan.ru/QSTemplate/QSTemplate-gulp</a> 
and run <code>npm install</code> in your terminal.

#### Advance way

Open your terminal and run

	git clone https://github.com/bonkalol/QSTemplate-gulp.git project
	rm -rf .git && rm readme.md
	git init
	git commit -m "init commit"
	git remote add origin https://github.com/username/reponame.git
	git push origin master
	npm install

<hr>
After that you ready to go. Run <code>gulp start</code> and goto <code>localhost:3000/production</code>, after that start write your code.

PS Yeoman generator version will be soon.

### QSTemplate About

QSTemplate also contain flexable project architecture. ( example 1. )

Example 1. Folder tree.

	├── dev
		├── assets
			├── docs.md
			├── css
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
			├── docs.md
			├── css
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
<hr>

Assets are folder which must contain third-party js, font, css and other stuff... All that is contained in this folder
will be copied in <code>production/assets/</code> folder.

#### dev/data/
<hr>

Data are folder which must contain data files, like <code>.json</code>. ll that is contained in this folder
will be copied in <code>production/data/</code> folder.

#### dev/font/
<hr>

I think there is no need to explain. All files in this folder will be copied in <code>production/font/</code> folder.

#### dev/img/
<hr>

Folder for images, all images in this folder will be minified and minified versions of this images will be copied in
<code>production/img/</code>

#### dev/img/sprite
<hr>

Folder for sprite, image in this folder will be generated into <code>production/img/sprite.png</code>

#### dev/jade
<hr>

Folder for pages in jade extension.

#### dev/jade/layouts
<hr>

Contain all jade layouts.

#### dev/jade/meta
<hr>

Contain all configs and helpers like mixins and vars.

#### dev/jade/partials
<hr>

Contain all jade partials, like <code>nav.jade</code> / <code>head.jade</code>...

#### dev/js
<hr>

Javascripts ^_^. <code>main.js</code> is a main file.

#### dev/js/partials
<hr>

All .js files in this folder will be combined into <code>main.js</code>. Js files into this folder not independent files,
it's just a partials of main.js.

#### dev/js/third-party

<code>Third-party</code> scripts will be combined into main.js.

#### dev/js/libs
<hr>

Files in libs folder will be copied in <code>production/js/libs</code>

#### dev/static
<hr>

This folder must contain .html files, if u don't wanna use Jade, write your html in this folder,
this files will be copied in <code>production/</code>

### dev/scss
<hr>

Еhis is a big topic, so it can be considered subsection.

<code>_config.scss</code> - contain all main configs. ( example 2. )

Example 2. Configs.

	$reset: true;
	$responsive: true;
	$borderBox: true;
	$fontSmooth: true;

<code>main.scss</code> - main file which include all imports.

#### base
<hr>

base folder contain files like a <code>_reset.scss</code>, <code>_font.scss</code>, <code>_base.scss</code>, <code>_custom-reset.scss</code>.

#### meta
<hr>

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

In QSTemplate also included <a href="https://github.com/ericam/susy">susy-grid</a> & <a href="http://meyerweb.com/eric/tools/css/reset/">reset.css</a>

#### project/components
<hr>

This folder contain modules, like buttons, forms, inputs... Main file in this folder are _components.scss.
All components must be imported in <code>_components.scss</code>.

	@import
		'development',
		'typography',
		'buttons',
		'headings',
		'forms';

#### project/layout
<hr>

Contain layout items, such like a footer, header... Main file in this folder <code>_layout.scss</code>.

#### project/pages
<hr>

Contain some specific styles for the pages.

#### project
<hr>

<code>_class.lib.scss</code> contains classes that will be used frequently.

<code>_project.scss</code> contain all imports from this folder.

<code>_sprite.scss</code> contain generated scss code to create sprite mixin.

### Gulp

#### gulpfile.js

In <code>gulpfile</code> required all tasks. Tasks are located in <code>gulp</code> folder

#### gulp/configs.js

In this file located all configs, like paths, autoprefixer browsers and other stuff like that.

#### gulp/sass.js

Example of task.

```javascript
gulp.task('sass', function () {
	return gulp.src(paths.srcPaths.scss)
		.pipe(notify('File changed: dev/scss/<%= file.relative %>! Starting SASS.'))
		.pipe(sass({
			style: configsSass.style,
			sourcemap: configsSass.sourcemap,
			sourcemapPath: paths.destPaths.css
		}))
		.pipe(duration('Finished SASS task in'))
		.on('error', log)
		.pipe(autoprefixer({
			// More about browser: https://github.com/postcss/autoprefixer#browsers
			browsers: [
				'Android >= ' + configsAutoprefixer.android,
				'Chrome >= ' + configsAutoprefixer.chrome,
				'Firefox >= ' + configsAutoprefixer.firefox,
				'Explorer >= ' + configsAutoprefixer.ie,
				'iOS >= ' + configsAutoprefixer.ios,
				'Opera >= ' + configsAutoprefixer.opera,
				'Safari >= ' + configsAutoprefixer.safari
			],
			cascade: true
		}))
		.pipe(duration('Finished Autoprefixer task in'))
		.pipe(isProduction ? cssmin() : gutil.noop())
		.pipe(isProduction ? duration('Finished CssMin task in') : gutil.noop())
		.pipe(gulp.dest(paths.destPaths.css))
		.pipe(reload({stream: true}))
		.pipe(notify('File created: ' + paths.destPaths.css + '<%= file.relative %>! SASS Finished.'));
});
```
So

1. Sass was started and notify you
2. Compiling sass
3. Console.log how much time it compile takes
4. If it's a production build, css will be minified
5. If it's a production build, will log how much time it takes
6. Save file into dest
7. Reload browserSync
8. Notify you that Sass was completed

#### Available gulp tasks

| task | description |
|----------|---|
| <code><strong>default</strong></code> | will clean <code>production</code> folder, compile all source files, and copy all assets. After that, watch and browserSync will start working |
| <code><strong>watch</strong></code> | will watch on file changes |
| <code><strong>start</strong></code> | start <code>watch</code> and <code>browserSync</code> |
| <code><strong>compile</strong></code> | will run <code>sass</code>, <code>jade</code> and <code>concat</code> tasks |
| <code><strong>copyStuff</strong></code> | will copy <code>assets</code>, <code>static</code>, <code>data</code> ... |


### Possible problems

If u are using windows, and you can't install dependencies using <code>npm install</code>,
you should install all dependencies by yourself, like <code>npm install gulp@~3.8.9</code> ... Or u can copy and paste in your terminal all npm installs from <a href="https://gist.github.com/bonkalol/aa89e4cfa3ed64ba7de3">this</a> gist.

Gulp not watching empty folders. that's not my fault, this problem are still actual. Gulp watch <a href="https://github.com/floatdrop/gulp-watch/issues/56">issue 56</a>.

## Ru

<a href="https://github.com/bonkalol/QSTemplate">Grunt</a> или <a href="https://github.com/bonkalol/QSTemplate-gulp">Gulp</a> версия

QSTemplate это шаблон для быстро старта вашего веб-проекта. Он основан на 3 мощных компонентах для front-end разработки.

1. <code>Jade</code>
2. <code>SASS (SCSS)</code>
3. <code>Gulp</code>

## Навигация

1. <a href="#quick-start-ru">Быстрый старт</a>

  1.1. <a href="#simple-way">Простой способ</a>

  1.2. <a href="#advance-way">Продвинутый способ<a>

2. <a href="#qstemplate-about">Все о OSTemplate</a>

3. <a href="#possible-problems">Возможные проблемы</a>

<h3 id="quick-start-ru">Быстрый старт</h3>

<h4 id="simple-way-ru">Простой способ</h4>

Скачайте архив с 
<a href="http://blinnikovbogdan.ru/QSTemplate/QSTemplate-gulp.zip">http://blinnikovbogdan.ru/QSTemplate/QSTemplate-gulp</a> 
и запустите <code>npm install</code> в вашем терминале.

#### Продвинутый способ

Откройте ваш терминал и запустите

	git clone https://github.com/bonkalol/QSTemplate-gulp.git project
	rm -rf .git && rm readme.md
	git init
	git commit -m "init commit"
	git remote add origin https://github.com/username/reponame.git
	git push origin master
	npm install

<hr>
После этого вы готовы начать. Запустите <code>gulp start</code> и откройте в браузере <code>localhost:3000/production</code>, после этих действий вы можете приступить к написанию кода.

PS Yeoman generator version will be soon.

### больше о QSTemplate

QSTemplate включает в себя гибкую и продуманную архитектуру. ( Пример 1. )

Пример 1. Структура проекта.

	├── dev
		├── assets
			├── docs.md
			├── css
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
			├── docs.md
			├── css
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

Объяснение того, что здесь происходит:

#### dev/assets/
<hr>

Assets это папка которая может содерждать third-party js скрипты, шрифты, css и другое... Все, что лежит в этой папке 
будет скопировано в <code>production/assets/</code>.

#### dev/data/
<hr>

Data папка предназначеная для файлов с данными, таких как <code>.json</code>. Все, что лежит в этой
папке будет скопировано в <code>production/data/</code>.

#### dev/font/
<hr>

Я думаю тут и так все понятно. Все файлы в этой папке будут скопированы в <code>production/font/</code>.

#### dev/img/
<hr>

Папка для изображений, все изображения в этой папке будут минифицированны и после чего скопированы в <code>production/img/</code>

#### dev/img/sprite
<hr>

Папка для хранения иконок для спрайтов, изображения из этой папки будут сгенерированы в спрайт, который будет лежать в <code>production/img/sprite.png</code>

#### dev/jade
<hr>

Папка для <code>.jade</code> исходников, в корне лежат страницы.

#### dev/jade/layouts
<hr>

Содержит всевозможные <code>jade</code> лэйауты.

#### dev/jade/meta
<hr>

Содержит конфиги, переменные и различного рода хелперы.

#### dev/jade/partials
<hr>

Содержит отдельные части страниц, например <code>nav.jade</code> / <code>head.jade</code>...

#### dev/js
<hr>

Javascripts ^_^. <code>main.js</code> главный файл в этой папке.

#### dev/js/partials
<hr>

Все <code>.js</code> файлы в этой папке будут собраны в <code>main.js</code>. Js файлы в этой папке являются самостоятельными модулям,
но стоит держать в голове, что это всего лишь куски main.js.

#### dev/js/third-party

<code>Third-party</code> скрипты из этой папки будут собраны в main.js.

#### dev/js/libs
<hr>

Скрипты из этой папки будут скопированы в <code>production/js/libs</code>

#### dev/static
<hr>

Папка должна содержать <code>.html</code> файлы, Если вы не хотите использовать <code>jade</code>, пишите ваш html в этой папке,
эти файлы будут скопированы в <code>production/</code>

### dev/scss
<hr>

Это большой топик, поэтому разобью на несколько частей.

<code>_config.scss</code> - содержит основные конфиги для SASS. ( Пример 2. )

Пример 2. Configs.

	$reset: true;
	$responsive: true;
	$borderBox: true;
	$fontSmooth: true;

<code>main.scss</code> - главный файл в который импортяться все другие.

#### base
<hr>

base папка содержит базовые стили, такие как <code>_reset.scss</code>, <code>_font.scss</code>, <code>_base.scss</code>, <code>_custom-reset.scss</code>.

#### meta
<hr>

meta папка содержит различные хелперы и миксины. Мой любимый хелпер это <code>_mq.scss</code>.

<code>_mq.scss</code> это миксин, который позволяет писать медиа запросы намного проще. ( Пример 3. )

Пример 3. MQ mixin в действии.

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

В QSTemplate так же включена <a href="https://github.com/ericam/susy">susy-grid</a> & <a href="http://meyerweb.com/eric/tools/css/reset/">reset.css</a>

#### project/components
<hr>

Эта папка содержит все модули, такие как кнопки, формы, инпуты... Главный файл здесь это <code>_components.scss</code>.
Все компоненты должны быть импортированы в <code>_components.scss</code>.

	@import
		'development',
		'typography',
		'buttons',
		'headings',
		'forms';

#### project/layout
<hr>

Содержит все лэйаут элементы, такие как footer, header... Главный файл в этой папке <code>_layout.scss</code>.

#### project/pages
<hr>

Содержит специфичные стили для каждой из страниц.

#### project
<hr>

<code>_class.lib.scss</code> содержит классы которые часто используются.

<code>_project.scss</code> содержит все импорты из этой папки.

<code>_sprite.scss</code> содержит сгенерированый гульпом sprite миксин.

### Gulp

#### gulpfile.js

В <code>gulpfile</code> подключается все таски. Таски расположены в <code>gulp</code> папке

#### gulp/configs.js

В этом файлы расположены все конфиги, такие как, пути, autoprefixer браузеры и другое.

#### gulp/sass.js

Пример sass таска.

```javascript
gulp.task('sass', function () {
	return gulp.src(paths.srcPaths.scss)
		.pipe(notify('File changed: dev/scss/<%= file.relative %>! Starting SASS.'))
		.pipe(sass({
			style: configsSass.style,
			sourcemap: configsSass.sourcemap,
			sourcemapPath: paths.destPaths.css
		}))
		.pipe(duration('Finished SASS task in'))
		.on('error', log)
		.pipe(autoprefixer({
			// More about browser: https://github.com/postcss/autoprefixer#browsers
			browsers: [
				'Android >= ' + configsAutoprefixer.android,
				'Chrome >= ' + configsAutoprefixer.chrome,
				'Firefox >= ' + configsAutoprefixer.firefox,
				'Explorer >= ' + configsAutoprefixer.ie,
				'iOS >= ' + configsAutoprefixer.ios,
				'Opera >= ' + configsAutoprefixer.opera,
				'Safari >= ' + configsAutoprefixer.safari
			],
			cascade: true
		}))
		.pipe(duration('Finished Autoprefixer task in'))
		.pipe(isProduction ? cssmin() : gutil.noop())
		.pipe(isProduction ? duration('Finished CssMin task in') : gutil.noop())
		.pipe(gulp.dest(paths.destPaths.css))
		.pipe(reload({stream: true}))
		.pipe(notify('File created: ' + paths.destPaths.css + '<%= file.relative %>! SASS Finished.'));
});
```
Итак

1. SASS таск запустился и уведомил вас об этом
2. Компилируется SASS
3. Выписывает в консоль сколько времени это заняло
4. Если это продакшен билд, то минифицирует css
5. Если продакшен билд, то покажет сколько времяни заняла минификация css
6. Сохраняет файлы
7. Перезагружает browserSync
8. Уведомляет о том, что SASS таск завершен

#### Доступные таски

| task | описание |
|----------|---|
| <code><strong>default</strong></code> | очистить <code>production</code>, скомпилирует все исходники и скопирует все assets. После этого запустить browserSync и watch |
| <code><strong>watch</strong></code> | запустить gulp-watch |
| <code><strong>start</strong></code> | запустить <code>watch</code> и <code>browserSync</code> |
| <code><strong>compile</strong></code> | запустить <code>sass</code>, <code>jade</code> и <code>concat</code> таски |
| <code><strong>copyStuff</strong></code> | скопирует <code>assets</code>, <code>static</code>, <code>data</code> ... |


### Возможные проблемы

Если вы используете windows, и вы не можете установить зависимости используя <code>npm install</code>,
вам придеться установить все зависимости вручную, например <code>npm install gulp@~3.8.9</code> ... Но есть способо получше, как раз для такого "бага", я приготовил гист, вам надо просто скопировать содержимое <a href="https://gist.github.com/bonkalol/aa89e4cfa3ed64ba7de3">этого</a> гиста и вставить его в терминал.

Gulp не смотрит в пустые папки. Это не моя вина, Эта проблема до сих пор актуальна. Gulp watch <a href="https://github.com/floatdrop/gulp-watch/issues/56">issue 56</a>.