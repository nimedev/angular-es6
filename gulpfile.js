/**
 * gulp tasks
 * Build sass and js files in real time.
 * Prepare app for distribution int dist folder.
 */
'use strict';

/** core modules */

/** npm modules */
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync').create();
var del = require('del');
var gulp = require('gulp');
var historyApiFallback = require('connect-history-api-fallback');
var runSequence = require('run-sequence');

/** others modules. */
var config = require('./gulpconfig');

// variables
var flags = config.flags;
var paths = config.paths;
var templateCache = config.templateCache;
var tasks;

/** Config de autoprefixer. CSS compatibility */
var AUTOPREFIXER_BROWSERS = [
  'ie >= 9',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];

/**
 * CLEAN TASKS
 */
/** clean output directory */
gulp.task('clean', () => del.sync(paths.cleanAll));


/**
 * FRONT-END TASKS
 * Runs task without using browser-sync.
 */
gulp.task('i18n', () => i18nTask());

gulp.task('images', () => optimizeImageTask());

gulp.task('html', () => optimizeHtmlTask());

gulp.task('lint', () => lintTask());

gulp.task('styles', () => stylesTask());

gulp.task('templates', () => templateTask());

gulp.task('build', ['i18n', 'images', 'html', 'lint', 'styles', 'templates']);


/**
 * WATCH TASKS
 */
/** Watch styles and templates */
tasks = ['styles', 'templates'];
gulp.task('watch', tasks, () => {
  watchTasks();
});


/**
 * RELOAD TASKS
 */
/** Watch styles and templates with browser reload */
gulp.task('server', tasks, () => {
  // config browser-sync module
  browserSync.init({
    open: false,
    port: config.server.port,
    server: {
      baseDir: config.server.baseDir,
      middleware: [historyApiFallback()],
      routes: config.server.routes
    }
  });

  // Watch task
  watchTasks();
  
  // Watch for changes to reload
  gulp.watch(paths.reload).on('change', browserSync.reload);
});


/**
 * DEFAULT TASK
 * Generate clean dist for production.
 */
gulp.task('default', (cb) => {
  del.sync(paths.cleanAll);
  runSequence(['build'], cb);
});


/** HELPER FUNCTIONS */
/** copy json files for multi-language in dist folder. */
function i18nTask() {
  del.sync(paths.i18n.clean);
  return gulp.src(paths.i18n.src)
    .pipe(gulp.dest(paths.i18n.dest))
    .pipe($.size({ title: 'i18n' }));
}

/** Lint task */
function lintTask() {
  return gulp.src(paths.lint.src)
    .pipe($.if(flags.lintJscs, $.jscs()))
    .pipe($.if(flags.lintJscs, $.jscsStylish.combineWithHintResults()))
    .pipe($.if(flags.lintJshint, $.jshint()))
    .pipe($.if(flags.lintJshint, $.jshint.reporter('jshint-stylish')));
}

/** optimize images and copy in dist folder. */
function optimizeImageTask() {
  del.sync(paths.images.clean);
  return gulp.src(paths.images.src)
  // .pipe($.imagemin({
  //   progressive: true,
  //   interlaced: true
  // }))
    .pipe(gulp.dest(paths.images.dest))
    .pipe($.size({ title: 'images' }));
}

/** Optimize html files and copy in dist folder. */
function optimizeHtmlTask() {
  del.sync(paths.html.clean);
  return gulp.src(paths.html.src)
    .pipe($.htmlReplace({
      'js': 'assets/js/main.min.js'
    }))
    .pipe(gulp.dest('.tmp/' + paths.html.dest))
    .pipe($.htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest(paths.html.dest))
    .pipe($.size({ title: 'html' }));
}

/**
 * Compile sass files and copy the resulting file in dist folder.
 * Make a copy in .tmp folder without minify.
 */
function stylesTask() {
  let name = 'style.min.css';
  del.sync(paths.styles.clean);
  return gulp.src(paths.styles.src)
    .pipe($.sass().on('error', $.sass.logError))
    .pipe($.rename(name))
    .pipe($.if(flags.autoprefixer, $.autoprefixer({ browsers: AUTOPREFIXER_BROWSERS })))
    .pipe($.if(flags.mergeMediaQueries, $.mergeMediaQueries()))
    .pipe(gulp.dest('.tmp/' + paths.styles.dest))
    .pipe($.if(flags.minifyCss, $.cssnano()))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe($.size({ title: name }))
    .pipe(browserSync.stream());
}

/** Prepare templates in stream. */
function templateTask() {
  let name = templateCache.file;
  del.sync(paths.templates.clean);
  return gulp.src(paths.templates.src)
    .pipe($.plumber({
      handleError: function (err) {
        console.log(err);
        this.emit('end');
      }
    }))
    .pipe($.htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe($.angularTemplatecache(name, templateCache.options))
    .pipe(gulp.dest(paths.templates.dest))
    .pipe($.size({ title: name }))
    .pipe(browserSync.stream());
}

/** Wrap all watch function */
function watchTasks() {
  // watch for changes in styles files
  $.watch(paths.styles.watch,
    $.batch((events, done) => gulp.start('styles', done)));
  
  // watch for changes in templates files
  $.watch(paths.templates.watch,
    $.batch((events, done) => gulp.start('templates', done)));
}