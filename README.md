# QSTemplate
----------

<img src="http://cs622016.vk.me/v622016523/32cf/icUtNzuqwW8.jpg" alt="Drawing" style="width: 200px; max-height: 100%"/>

QSTempalate это шаблон для быстрого старта проекта. Состоит он из 3ех мощных инструментов 
front-end разработки.

## Установка

	git clone https://github.com/bonkalol/QSTemple .
	npm install

## Баги, пожелания

	https://github.com/bonkalol/QSTemple/issues

## Пожертвования

	Yandex Money 410011314798585

## Jade

Node шаблонизатор, который тут используется как HTML препроцессор, jade позволяет ускорять написание HTML кода,
а так же разбивать его на некоторые отдельные части, с которыми куда удобнее работать, чем с одним файлом в 800 строк
кода, но это не все возможности Jade, более подробно вы можете ознакомиться с ним прочитав 
<a href="http://jade-lang.com/reference/" title="Jade Lang Page"> Language Reference </a> на сайте <a href="http://jade-lang.com" title="Jade Lang Page"> Jade-lang. </a>

## SCSS + Autoprefixer

SASS - CSS Препроцессор, который позволяет расширить CSS, дает возможность использовать Циклы и Условия,
а так же переменные и многое другое. Ознакомиться можно здесь => <a href="http://sass-lang.com/">sass-lang.com</a>.

## Grunt

Система сборки. Grunt комплирует файлы, собирает из множества файлов один файл, минифицирует код/изображения,
сам создаст вам спрайт, сам заметить изменения в файле и перекомпилирует его, а так же многое другое. Более подробно о Grunt
можно прочитать на <a href="http://gruntjs.com/">gruntjs.com</a>.

## Основные feature

### Продуманная архитекрута проекта

<img src="http://blinnikovbogdan.ru/QSTemplate/images/template-tree.png" alt="Tempalte Tree" style="max-height: 100%"/>

Dev папка - в ней находятся всевозможные исходиники, будь то изображения / scss / jade файлы

----------

Dev -> scss

<img src="http://blinnikovbogdan.ru/QSTemplate/images/scss-tree.png" alt="SCSS tree" style="max-height: 100%"/>

Тут хочу подробно остановиться на 2ух файлах, это base.scss и config.scss

<strong style="font-size: 1.2em">Config.scss</strong>

В Файле config.scss лежат основные конфиги проекта, в нем мы можем определить, нужен ли нам
reset.css, repsonsive ( включение, выключение media queries) ли сайт, использовать ли свойство
box-sizing: border-box, сглаживать ли шрифты, а так же базовый шрифт и его размер.

Эти данные в последствии используются в коде, для включения/отключения некоторых функций.

<img src="http://blinnikovbogdan.ru/QSTemplate/images/responsive-scss.png" alt="repsonsive scss screenshot" style="max-height: 100%">

Например как в этом пример. Мы видим, что если условие выполняется, то тогда media queries брекпоинты работают. Если в config.scss
поменять значение на false, то работать они соответсвенно не будут.

<strong style="font-size: 1.2em">Base.scss</strong>

В папке base лежат все базовые стили, файл base.scss , предназначен для базовой стилизации тегов.

<strong style="font-size: 1.2em">About sass</strong>

По задумке для каждой страницы должен создаваться отдельный .scss файл и помещаться в project/pages/

В папке meta/ хранятся файлы с миксинами, тихими классами и переменными.

В папке cosmetic/ файл CSS анимации (animation.scss), файл отвечающий за респонсив (responsive.scss) и файл отвечающие за различные эффекты.

<strong style="font-size: 1.2em">Немного о cosmetic.scss</strong>

Этот файл предназначен для добавления на страницу визуальных эффектов, например, 3d трансорфмаций который будут дальше использоваться для многих элементов, стили этого файла должны работать по принципу "Progressive enhancement", т.е. прогрессивное улучшение, допустим вы разрабатываете сайт для
устаревших браузеров которые не поддерживают свойства box-shadow / border-radius , класс, к которому будет применяться этот стиль, стоит выписать сюда и добавить к нему свойство box-shadow.

<strong style="font-size: 1.2em">Немного о project/</strong>

В папке project лежат .scss файлы страниц, а так же иногда я создаю папку project/items/ и в неё кладу различные блоки которые повторяются на страницах, допустим навигация. Так же тут есть файл class.lib в котором лежат часто используемые классы.

----------

Jade

<img src="http://blinnikovbogdan.ru/QSTemplate/images/jade-tree.png" alt="jade-tree" style="max-height: 100%">

В папке jade уже создана папка layouts / meta, в папке layouts лежат базовые layouts проекта. В папке meta есть 2 файла
mixin.jade, в котором хранятся миксины, например, такие

<img src="http://blinnikovbogdan.ru/QSTemplate/images/jade-mixins.png" alt="" style="max-height: 100%">

и variables.jade , в котором хранятся переменные. Страницы проекта по задумке создаются в корневом каталоге папки jade. Примером может служить файл index.jade.

----------

Production

<img src="http://blinnikovbogdan.ru/QSTemplate/images/production-tree.png" alt="" style="max-height: 100%">

Ну тут я думаю все понятно, CSS / JS / Images , точнее их production версии, то есть scss скомпилированный в CSS, ужатый и собранный в один файл JS
Jade скомпилированный в HTML, и минифицированные картинки.

### Немного о Gruntfile.js

В грант включены следующие tasks.

	// load tasks
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-newer');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-spritesmith');


А так же registerTask

	// tasks
	grunt.registerTask('default', ['sass', 'jade', 'imagemin', 'autoprefixer']);
	grunt.registerTask('compile', ['sass', 'jade', 'autoprefixer']);
	grunt.registerTask('minimg', ['imagemin']);
	grunt.registerTask('prefix', ['autoprefixer']);
	grunt.registerTask('jsprod', ['concat', 'uglify']);
	grunt.registerTask('copyFonts', ['copy:fonts']);
	grunt.registerTask('copyImages', ['copy:images']);
	grunt.registerTask('imgSprite', ['sprite', 'sass', 'autoprefixer']);

----------

Js Concat , сначала подключается jquery, потом third-party скрипты, а потом только наш main.js
в котором находится написанный нами код

<img src="http://blinnikovbogdan.ru/QSTemplate/images/grunt%20concat.png" alt="" style="max-height: 100%;">


CSS Autoprefixer можете выставить браузеры под какие надо добавлять префиксы и забыть про то, что такое префиксы

<img src="http://blinnikovbogdan.ru/QSTemplate/images/autoprefixer.png" alt="" style="max-height: 100%;">


Стиль исходного CSS файла вы можете поменять изменив значение style у SASS таска.

<img src="http://blinnikovbogdan.ru/QSTemplate/images/sass.png" alt="" style="max-height: 100%">

Sprite

				src: 'dev/img/sprite/*.png',
				destImg: 'production/img/sprite.png',
				destCSS: 'dev/scss/project/_sprite.scss'

Будут браться все .png файлы из dev/img/sprite/ , собираться в один файл production/img/sprite.png и создавать на основе dev/scss/project/_sprite.scss

----------

Readme created 01.11.2014 : 21-54
По всем вопросам: <a href="http://blinnikovbogdan.ru/contact">Связывайтесь со мной</a> или пишите мне <a href="mailto:bonkalol@list.ru?subject=QSTemplate">bonkalol@list.ru</a>