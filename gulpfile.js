/**
 * gulp tasks
 * Build sass and js files in real time.
 * Prepare app for distribution int dist folder.
 */
'use strict';

/** core modules */
var path = require('path');

/** npm modules */
var $ = require('gulp-load-plugins')();
var addStream = require('add-stream');
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
var filesName = config.filesName;
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
gulp.task('bundle:app', () => bundleAppTask());

gulp.task('bundle', ['bundle:app']);

gulp.task('html', () => optimizeHtmlTask());

gulp.task('i18n', () => i18nTask());

gulp.task('images', () => optimizeImageTask());

gulp.task('lint', () => lintTask());

gulp.task('styles', () => stylesTask());

gulp.task('build', ['bundle', 'html', 'i18n', 'images', 'lint', 'styles']);


/**
 * WATCH TASKS
 */
/** Watch styles and templates */
gulp.task('styles:watch', () => stylesTask(paths.styles.dest.dev));
tasks = ['styles:watch'];
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
/** 
 * Create bundle for app scripts
 * @return {Object} bundle stream 
 */
function bundleApp() {
  return gulp.src(paths.bundle.main)
    .pipe($.jspm());
}

/** 
 * Concat app bundle with config.js file and minify
 * @return {Object} bundle stream 
 */
function minAppBundle() {
  let name = filesName.bundle.app;
  return gulp.src(paths.bundle.config)
    .pipe(addStream.obj(bundleApp()))
    .pipe($.concat(name))
    .pipe($.uglify());
}

/** 
 * Combine app bundle stream with SystemJS files
 */
function bundleAppTask() {
  let destPath = paths.bundle.dest;
  let name = filesName.bundle.app;
  del.sync(path.join(destPath, '*'));
  return gulp.src(paths.bundle.src)
    .pipe(addStream.obj(minAppBundle()))
    .pipe(gulp.dest(destPath))
    .pipe($.size({ title: path.join(destPath, name) }));
}

/** Copy json files for multi-language in dist folder. */
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

/** Optimize html files and copy in dist folder. */
function optimizeHtmlTask() {
  del.sync(paths.html.clean);
  return gulp.src(paths.html.src)
    .pipe($.htmlReplace({
      'js': ['assets/js/system.js', 'assets/js/app.js']
    }))
    .pipe(gulp.dest('.tmp/'))
    .pipe($.htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest(paths.html.dest))
    .pipe($.size({ title: 'html' }));
}

/** Optimize images and copy in dist folder. */
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

/**
 * Compile sass files and copy the resulting file in dist folder.
 * Make a copy in .tmp folder without minify.
 * @param {String} dest - Destination path.
 */
function stylesTask(dest) {
  let name = filesName.styles;
  let destPath = dest || paths.styles.dest.dist;
  del.sync(path.join(destPath, '*'));
  return gulp.src(paths.styles.src)
    .pipe($.sass().on('error', $.sass.logError))
    .pipe($.rename(name))
    .pipe($.if(flags.autoprefixer, $.autoprefixer({ browsers: AUTOPREFIXER_BROWSERS })))
    .pipe($.if(flags.mergeMediaQueries, $.mergeMediaQueries()))
    .pipe(gulp.dest('.tmp/'))
    .pipe($.if(flags.minifyCss, $.cssnano()))
    .pipe(gulp.dest(destPath))
    .pipe($.size({ title: path.join(destPath, name) }))
    .pipe(browserSync.stream());
}

/** Wrap all watch function */
function watchTasks() {
  // watch for changes in styles files
  $.watch(paths.styles.watch,
    $.batch((events, done) => gulp.start('styles:watch', done)));
}