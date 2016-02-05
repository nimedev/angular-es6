/**
 * gulp tasks
 * Build sass and js files in real time.
 * Prepare app for distribution int dist folder.
 */
'use strict';

// Use this module to inspect execution times
require('time-require');

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
var jspmConfig = require('./package').jspm;

// variables
var flags = config.flags;
var paths = config.paths;
var filesName = config.filesName;
var tasks;
var vendors;

// Get a array with a list of jspm vendors (dependencies)
vendors = Object.keys(jspmConfig.dependencies);

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
gulp.task('html', () => optimizeHtmlTask());

gulp.task('i18n', () => i18nTask());

gulp.task('images', () => optimizeImageTask());

gulp.task('lint', () => lintTask());

gulp.task('style', () => styleTask());


/**
 * BUNDLE TASKS
 */
gulp.task('bundle:app', () => bundleAppTask());

gulp.task('bundle:dep', $.shell.task(shellBundle(config.bundle.dep)));

gulp.task('bundle:ng', $.shell.task(shellBundle(config.bundle.ng)));

gulp.task('bundle:ng-material', $.shell.task(shellBundle(config.bundle.ngMaterial)));

gulp.task('bundle:vendors', $.shell.task(shellBundle(config.bundle.vendors)));

// Group bundle tasks
// Separate bundles in app.js and dep.js files.
gulp.task('bundle', (cb) => {
  del.sync(path.join(paths.bundle.dest, '*'));
  runSequence(['bundle:app', 'bundle:dep'], cb);
});

// Group build task in one
gulp.task('build', ['lint'], (cb) => {
  runSequence(['bundle', 'html', 'i18n', 'images', 'style'], cb);
});


/**
 * WATCH TASKS
 */
/** Watch styles and templates */
gulp.task('style:watch', () => styleTask(paths.style.dest.dev));
tasks = ['style:watch'];
gulp.task('watch', tasks, () => {
  watchTasks();
});


/**
 * RELOAD TASKS
 */
/** Watch styles and templates with browser reload */
gulp.task('hot-reload', tasks, () => {
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
 * Create bundle app file for app scripts
 * @return {Object} bundle stream 
 */
function bundleApp() {
  let arithmetic = '';
  
  // Make string to ignore vendors in bundle app.
  for (let vendor of vendors) {
    arithmetic += ` - ${vendor}`;
  }
  console.log(arithmetic);

  return gulp.src(paths.bundle.main)
    .pipe($.jspm({ arithmetic: arithmetic }));
}

/** 
 * Concat system.js and config.js files with app bundle file
 * and copy to dist folder 
 */
function bundleAppTask() {
  let destPath = paths.bundle.dest;
  let name = config.bundle.app.name;
  return gulp.src(paths.bundle.src)
    .pipe(addStream.obj(bundleApp()))
    .pipe($.concat(name))
    .pipe($.uglify())
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
      'js': config.htmlReplace
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
 * Prepare shell comand for jspm bundle
 * @param {Object} options - Object with arithmetic and name of bundle comand
 */
function shellBundle(options) {
  let arithmetic = '';
  
  // Make string to ignore vendors in bundle app.
  if (options.arithmetic) {
    arithmetic = options.arithmetic;
  } else {
    arithmetic += vendors[0];
    for (let vendor of vendors) {
      arithmetic += ` + ${vendor}`;
    }
    console.log(arithmetic);
  }

  return [
    `jspm bundle ${arithmetic} ${paths.bundle.dest}/${options.name} --minify --skip-source-maps`
  ];
}

/**
 * Compile sass files and copy the resulting file in dist folder.
 * Make a copy in .tmp folder without minify.
 * @param {String} dest - Destination path.
 */
function styleTask(dest) {
  let name = filesName.styleOut;
  let destPath = dest || paths.style.dest.dist;
  del.sync(path.join(destPath, '*'));
  return gulp.src(paths.style.src)
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
  $.watch(paths.style.watch,
    $.batch((events, done) => gulp.start('style:watch', done)));
}