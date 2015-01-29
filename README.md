# QSTemplate

<a href="#en">EN</a> or <a href="#ru">RU</a>

## En

### Getting started

Before start you must have installed <a href="http://git-scm.com/downloads">git</a> & <a href="https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md">gulp</a>.

	git clone https://github.com/bonkalol/QSTemplate-gulp.git project
	rm -rf .git && rm readme.md
	git init
	git add --all .
	git commit -m "init commit"
	git remote add origin https://github.com/username/reponame.git
	git push origin master
	npm install

<a href="https://github.com/bonkalol/QSTemplate">Grunt</a> Or <a href="https://github.com/bonkalol/QSTemplate-gulp">Gulp</a> version

QSTemplate it's a project template for quick start your web-project. it's based on 3 powerfull components.

1. <code>Jade</code>
2. <code>SASS (SCSS)</code>
3. <code>Gulp</code>

Read more in <a href="https://github.com/bonkalol/QSTemplate-gulp/wiki">wiki</a>

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

QSTemplate это шаблон для быстрого старта вашего веб-проекта, состоит он из 3ех мощных компонентов для веб-разработки.

Читать больше в <a href="https://github.com/bonkalol/QSTemplate-gulp/wiki">wiki</a>

1. <code>Jade</code>
2. <code>SASS (SCSS)</code>
3. <code>Gulp</code>

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