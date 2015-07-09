<img src="http://truthoraction.com/host/walle.jpg" alt="WALL-e">

# WALL-E

<a href="#en">EN</a> or <a href="#ru">RU</a>

## En

### Getting started

#### Require

- Git ~1.9
- Gulp ~3.8.11

Installing <a href="http://sass-lang.com/install">Sass</a>.

Before start you must have installed <a href="http://git-scm.com/downloads">git</a> & <a href="https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md">gulp</a>.



	git clone https://github.com/bonkalol/QSTemplate-gulp.git project
	rm -rf .git && rm readme.md
	git init
	git add --all .
	git commit -m "init commit"
	git remote add origin https://github.com/username/reponame.git
	git push origin master
	npm cache clean
	npm install

or

	git clone https://github.com/bonkalol/QSTemplate-gulp.git project
	hook.sh

WALL-E it's a project template for quick start your web-project. it's based on 3 powerfull components.

1. <code>Jade</code>
2. <code>SASS (Libsass)</code>
3. <code>Gulp</code>

### Bugs / enhancement

Found a bug or want to suggest improvements? Write about it in <a href="https://github.com/bonkalol/QSTemplate-gulp/issues">issue</a> or send me an email <a href="mailto:bonkalol@list.ru">bonkalol@list.ru</a>

#### Available gulp tasks

| task | description |
|----------|---|
| <code><strong>default</strong></code> | will clean <code>dist</code> folder, compile all source files, and copy all assets. After that, watch and browserSync will start working |
| <code><storng>build</storng></code> | will do same as <code>default</code> but without starting browserSync && watch
| <code><strong>watch</strong></code> | will watch on file changes |
| <code><strong>start</strong></code> | start <code>watch</code> and <code>browserSync</code> |
| <code><strong>compile</strong></code> | will run <code>sass</code>, <code>jade</code> and <code>concat</code> tasks |
| <code><strong>copyStuff</strong></code> | will copy <code>assets</code>, <code>static</code>, <code>data</code> ... |

#### Keys

<code>gulp --debug</code> - will run gulp without files minification
<code>gulp --es6</code> - will run gulp with babel

### Patch notes 4.0.0

<strong>Breaking changes:</strong>

1. Replace gulp-ruby-sass to libsass
2. Remove coffeeScript support
3. Added gulp-babel ( for syntax higlight in sublime use <a href="https://github.com/Benvie/JavaScriptNext.tmLanguage">JavascriptNext</a> )

<strong>Changes:</strong>

1. Remove uncss
2. Remove gulp-html-prettify
3. BrowserSync will not auto open browser anymore
4. Add --debug key, now u don't need change isProduction var, just run gulp to minify files
and gulp --debug will not minify
5. Add sourcemaps for js
6. Fix sourcemaps for sass
7. Clean up package.json


### Patch notes 3.1.0

1. Add gulp-useref
2. Add modules/debug.js for clear localStorage from cached fonts / svg
3. Fix bug with svg sprite
4. Fix bug with imagemin .webp
5. Add runSequence

### Version 3.0.0

1. Update all package.json dependencies
2. Added .htaccess for appCache and created manifest file
3. Update whole project file tree, now dev => app, production => dist
4. Added svg-sprites
5. Added fonts / svg caching in localStorage
6. Fix bug with imagemin then it throw error
7. Remove Susy
8. Remove jquery by default, now all dependencies should be loaded with bower
9. Added some usefull js components
10. Fix bug then webp task copy .svg
11. Added uncss


### Patch notes 2.1.0

1. Update all package.json dependecies
2. Update errorHandler, now plumber is working for error handling
3. Update gulp-watch, now there is no bug with empty file not being watched
4. Added Modernizr.webp test in jade/partials > srcipt
5. Added coffeeScript support
...

## Ru

WALL-E это шаблон для быстрого старта вашего веб-проекта, состоит он из 3ех мощных компонентов для веб-разработки.

1. <code>Jade</code>
2. <code>SASS (Libsass)</code>
3. <code>Gulp</code>

### Начало работы

#### Необходимое

- Git ~1.9
- Gulp ~3.8.11

Установите <a href="http://sass-lang.com/install">Sass</a>.

Перед начало у вас должен быть установлен <a href="http://git-scm.com/downloads">git</a> & <a href="https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md">gulp</a>.



### Баги / пожелания

Нашли баг или хотите предложить фичу? Пишите в <a href="https://github.com/bonkalol/QSTemplate-gulp/issues">issue</a> или мне на почту <a href="mailto:bonkalol@list.ru">bonkalol@list.ru</a>


#### Доступные таски

| task | описание |
|----------|---|
| <code><strong>default</strong></code> | очистить <code>dist</code>, скомпилирует все исходники и скопирует все assets. После этого запустить browserSync и watch |
| <code><storng>build</storng></code> | сделает тоже самое что и <code>default</code> за исключением запуска browserSync && watch
| <code><strong>watch</strong></code> | запустить gulp-watch |
| <code><strong>start</strong></code> | запустить <code>watch</code> и <code>browserSync</code> |
| <code><strong>compile</strong></code> | запустить <code>sass</code>, <code>jade</code> и <code>concat</code> таски |
| <code><strong>copyStuff</strong></code> | скопирует <code>assets</code>, <code>static</code>, <code>data</code> ... |

#### Ключи

<code>gulp --debug</code> - запустит gulp без минификации файлов
<code>gulp --es6</code> - запустит gulp с babel, позволит использовать es6

### Patch notes 4.0.0

<strong>Критические изменения:</strong>

1. Заменил ruby-sass на libsass
2. Убрал поддержку coffeescript
3. Добавил gulp-babel ( для подсветки синтаксиса в саблайме рекомендую <a href="https://github.com/Benvie/JavaScriptNext.tmLanguage">JavascriptNext</a> )

<strong>Изменения:</strong>

1. Удалил uncss
2. Убрал gulp-html-prettify
3. BrowserSync теперь не будет автоматически открывать браузер
4. Добавил --debug ключ, теперь не надо менять isProduction переменную, просто запустите gulp чтобы файлы минифицировались
и gulp --debug чтобы не минифицировались
5. Добавил sourcemaps для js
6. Исправил sourcemaps для sass
7. Почистил package.json

### Патч 3.1.0

1. Добавил gulp-useref
2. Добавил modules/debug.js для очистки localStorage от кешированых шрифтов / свг
3. Пофиксил баг с сборкой svg спрайтов
4. Пофиксил баг с минификацией .webp
5. Вернул runSequence


### Версия 3.0.0

1. Обновил все зависимости package.json
2. Добавил .htaccess для appCache и создал manifest файл
3. Обновил структуру проекта, теперь dev => app, production => dist
4. Добавил svg-спрайты
5. Добабвил кеширование в localStorage шрифтов и Svg спрайтов
6. Исправил баг с imagemin когда она выкидывал ошибку
7. Удалил Susy
8. Удалил jquery по умолчанию, теперь все необходимые зависимости устанвливаются с помощь bower
9. Добавил несколько js компонентов по умолчанию
10. Исправил баг когда webp таск копировал .svg
11. Добавил uncss


### Патч 2.1.0

1. Обновил все зависимости package.json
2. Обновил errorHanlder , теперь обработкой ошибок занимается plumber
3. Обновил gulp-watch , это исправляет баг когда watch не смотрел в пустые папки
4. Добавил Modernizr.webp тест в jade/partials > script
5. Добавил поддержку coffeeScript
...

