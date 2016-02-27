/**
 * Gulp tasks
 * Build sass and js files in real time.
 * Prepare app for distribution int dist folder.
 */
'use strict';

// Use this module to inspect execution times
// require('time-require');

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
 */
// Save index.html file in dist folder
gulp.task('html', () => optimizeHtmlTask());

// Save index.html file in dev folder
gulp.task('html:dev', () => optimizeHtmlTask(paths.html.dest.dev));


// Save i18n files in dist folder
gulp.task('i18n', () => i18nTask());

// Save i18n files in dev folder
gulp.task('i18n:dev', () => i18nTask(paths.i18n.dest.dev));


// Save images files in dist folder
gulp.task('images', () => optimizeImageTask());

// Save images files in dev folder
gulp.task('images:dev', () => optimizeImageTask(paths.images.dest.dev));


// Lint task
gulp.task('lint', () => lintTask());


// Save misc files in dist folder
gulp.task('misc', () => miscTask());

// Save misc files in dev folder
gulp.task('misc:dev', () => miscTask(paths.misc.dest.dev));


// Save style file in dist folder
gulp.task('style', () => styleTask());

// Save style file in dev folder
gulp.task('style:dev', () => styleTask(paths.style.dest.dev));


/**
 * BUNDLE TASKS
 */
// Perform bundle-shell task with i18n task
gulp.task('bundle:app', cb => runSequence(['app-shell', 'i18n'], cb));

// Bundle application files in dist folder.
gulp.task('app-shell', $.shell.task(shellBundle(config.bundle.app)));

// Perform bundle-shell task with i18n task for development environment.
gulp.task('bundle:app-dev', cb => runSequence(['app-shell:dev', 'i18n:dev'], cb));

// Bundle application files in dev folder.
gulp.task('app-shell:dev', () => {
  return gulp.src(paths.bundle.main)
    .pipe($.shell(shellBundle(config.bundle.app, paths.bundle.dest.dev)))
  // .pipe(browserSync.stream());
});


// Bundle dependencies in dist folder.
// First bundle in tmp folder and then concat and copy in dist folder.
gulp.task('bundle:dep', cb => runSequence('bundle:tmp', 'dep:concat', cb));

// Concat bundle dependecies in dist folder.
gulp.task('dep:concat', () => bundleDepTask());

// Bundle dependencies in dev folder.
// First bundle in tmp folder and then concat and copy in dev folder.
gulp.task('bundle:dep-dev', cb => runSequence('bundle:tmp', 'dep-dev:concat', cb));

// Concat bundle dependecies in dev folder.
gulp.task('dep-dev:concat', () => bundleDepTask(paths.bundle.dest.dev));

// Bundle dependencies in .tmp folder.
gulp.task('bundle:tmp', $.shell.task(shellBundle(config.bundle.dep, '.tmp')));


// Others bundles posibles bundles
gulp.task('bundle:ng', $.shell.task(shellBundle(config.bundle.ng)));

gulp.task('bundle:ng-material', $.shell.task(shellBundle(config.bundle.ngMaterial)));

gulp.task('bundle:vendors', $.shell.task(shellBundle(config.bundle.vendors)));


// Group bundle tasks
// Separate bundles in app.js and dep.js files.
gulp.task('bundle', cb => runSequence(['bundle:app', 'bundle:dep'], cb));

// Separate bundles in app.js and dep.js files for development.
gulp.task('bundle:dev', cb => runSequence(['bundle:app-dev', 'bundle:dep-dev'], cb));


// Group build task in one
gulp.task('build', ['lint'], cb => runSequence(['bundle', 'html', 'images', 'misc', 'style'], cb));


/**
 * WATCH TASKS
 */
/** Watch all without browser reload */
tasks = ['bundle:dev', 'html:dev', 'images:dev', 'misc:dev', 'style:dev'];
gulp.task('watch', tasks, () => watchTasks(true));


/**
 * RELOAD TASKS
 */
/** Serve files from source folder watching styles with browser reload */
tasks = ['style:dev'];
gulp.task('hot-reload:src', tasks, () => {
  // config browser-sync module
  browserSync.init({
    open: false,
    port: config.server.port,
    server: {
      baseDir: config.server.baseDir.src,
      middleware: [historyApiFallback()],
      routes: config.server.routes
    }
  });

  // Watch only style:dev task
  watchTasks();
  
  // Watch for changes in source to reload
  gulp.watch(paths.reload.src).on('change', browserSync.reload);
});

/** Serve files from dev folder watching all front-end tasks */
tasks = ['bundle:dev', 'html:dev', 'images:dev', 'misc:dev', 'style:dev'];
gulp.task('hot-reload:dev', tasks, () => {
  // config browser-sync module
  browserSync.init({
    open: false,
    port: config.server.port,
    server: {
      baseDir: config.server.baseDir.dev,
      middleware: [historyApiFallback()]
    }
  });

  // Watch all tasks
  watchTasks(true);
  
  // Watch for changes in dev folder to reload
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
 * Create bundle dep file for jspm dependencies
 * @return {Object} bundle stream 
 */
function bundleDep() {
  let arithmetic = '- [app/**/*]';
  return gulp.src(paths.bundle.main)
    .pipe($.jspm({
      arithmetic: arithmetic
    }));
}

/** 
 * Concat system.js and config.js files with dependencie bundle file
 * that is in .tmp folder and copy to dest folder 
 * @param {string} dest - Destination path (use production path by default).
 */
function bundleDepTask(dest) {
  let destPath = dest || paths.bundle.dest.prod;
  let name = config.bundle.dep.name;
  let srcPath = paths.bundle.src; 
  
  // Add bundle dep file that is in temporal directory to source path. 
  srcPath.push(path.join('.tmp', name)); 
  
  // Do task
  return gulp.src(srcPath)
    .pipe($.uglify())
    .pipe($.concat(name))
    .pipe(gulp.dest(destPath))
    .pipe($.size({ title: path.join(destPath, name) }))
  // .pipe(browserSync.stream());
}

/** 
 * Copy i18n files in a new folder.
 * @param {string} dest - Destination path (use production path by default). 
 */
function i18nTask(dest) {
  let destPath = dest || paths.i18n.dest.prod;
  
  // Delete all files in dest folder
  del.sync(path.join(destPath, '*'));
  
  // Optimize i18n files
  return gulp.src(paths.i18n.src)
    .pipe(gulp.dest(destPath))
    .pipe($.size({ title: `i18n: ${destPath}` }));
}

/** Lint task */
function lintTask() {
  return gulp.src(paths.lint.src)
    .pipe($.if(flags.lintJscs, $.jscs()))
    .pipe($.if(flags.lintJscs, $.jscsStylish.combineWithHintResults()))
    .pipe($.if(flags.lintJshint, $.jshint()))
    .pipe($.if(flags.lintJshint, $.jshint.reporter('jshint-stylish')));
}

/** 
 * Copy miscellaneous files files in a new folder (robots.txt, .htaccess, etc).
 * @param {string} dest - Destination path (use production path by default). 
 */
function miscTask(dest) {
  let destPath = dest || paths.misc.dest.prod;
  
  // Delete all files in dest folder
  del.sync(path.join(destPath, '*'));
  
  // Copy miscellaneous files
  return gulp.src(paths.misc.src)
    .pipe(gulp.dest(destPath))
    .pipe($.size({ title: `Misc: ${destPath}` }))
  // .pipe(browserSync.stream());
}

/** 
 * Optimize html files and copy in in a new folder.
 * Make a copy in .tmp folder without minify.
 * @param {string} dest - Destination path (use production path by default). 
 */
function optimizeHtmlTask(dest) {
  let destPath = dest || paths.html.dest.prod;
  
  // Delete all html files in dest folder
  del.sync(path.join(destPath, '*.html'));
  
  // Optimize html files
  return gulp.src(paths.html.src)
    .pipe($.htmlReplace({
      'js': config.htmlReplace
    }))
    .pipe(gulp.dest('.tmp'))
    .pipe($.htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest(destPath))
    .pipe($.size({ title: `html: ${destPath}` }))
  // .pipe(browserSync.stream());
}

/** 
 * Optimize images files and copy in in a new folder.
 * @param {string} dest - Destination path (use production path by default). 
 */
function optimizeImageTask(dest) {
  let destPath = dest || paths.images.dest.prod;
  
  // Delete all files in dest folder
  del.sync(path.join(destPath, '*'));
  
  // Optimize images files
  return gulp.src(paths.images.src)
  // .pipe($.imagemin({
  //   progressive: true,
  //   interlaced: true
  // }))
    .pipe(gulp.dest(destPath))
    .pipe($.size({ title: `images: ${destPath}` }))
  // .pipe(browserSync.stream());
}

/**
 * Prepare shell comand for jspm bundle
 * @param {Object} options - Object with arithmetic and name of bundle comand
 * @param {string} dest - Destination path (use production path by default).
 */
function shellBundle(options, dest) {
  let arithmetic = options.arithmetic || '';
  let destPath = dest || paths.bundle.dest.prod;
  let opt = '--minify --skip-source-maps';
  let source = options.src;
  
  // if is in dev mode (dest != undefined) remove extra options
  if (dest) {
    opt = '';
  }
  
  // Make string to ignore vendors in bundle app.
  if (options.ignoreVendors) {
    arithmetic = vendorsList(true);
  }

  // Make string to include only vendors in bundle dep.
  if (options.onlyVendors) {
    source = vendors[0];
    arithmetic = vendorsList(false);
  }

  // Return shell command to bundle
  return [
    `jspm bundle ${source} ${arithmetic} ${destPath}/${options.name} ${opt}`
  ];
}

/**
 * Make a string with dependencie vendors.
 * ignore = true user '-' sign otherwise use '+'.
 * @param {boolean} ignore - Indicate what sign use in vendor list.
 */
function vendorsList(ignore) {
  let vendorsList = '';
  let sign = (ignore) ? '-' : '+';

  for (let vendor of vendors) {
    vendorsList += ` ${sign} ${vendor}`;
  }

  return vendorsList;
}

/**
 * Compile sass files and copy the resulting file in a new folder.
 * Make a copy in .tmp folder without minify.
 * @param {string} dest - Destination path (use production path by default).
 */
function styleTask(dest) {
  let name = filesName.styleOut;
  let destPath = dest || paths.style.dest.prod;
  let sourcemap = (dest !== undefined);
  
  // Delete all files in css folder
  del.sync(path.join(destPath, '*'));
  
  // Do style task
  // Only apply mergeMediaQueries in production because don't have
  // compatibility with sourcemap puglin.
  return gulp.src(paths.style.src)
    .pipe($.if(sourcemap, $.sourcemaps.init()))
    .pipe($.sass().on('error', $.sass.logError))
    .pipe($.rename(name))
    .pipe($.if(flags.autoprefixer, $.autoprefixer({ browsers: AUTOPREFIXER_BROWSERS })))
    .pipe($.if(flags.mergeMediaQueries && !sourcemap, $.mergeMediaQueries()))
    .pipe(gulp.dest('.tmp'))
    .pipe($.if(flags.minifyCss, $.cssnano()))
    .pipe($.if(sourcemap, $.sourcemaps.write('.')))
    .pipe(gulp.dest(destPath))
    .pipe($.size({ title: path.join(destPath, name) }))
  // .pipe(browserSync.stream());
}

/** 
 * Wrap all watch function
 * @param {boolean} watchAll - indicate if run all tasks or only style task 
 */
function watchTasks(watchAll) {
  if (watchAll) {
    // watch for changes in js or html files in app folder
    $.watch(paths.bundle.watch, ['bundle:app-dev']);
    // $.watch(paths.bundle.watch,
    //   $.batch((events, done) => gulp.start('bundle:app-dev', done)));
      
    // Watch for changes in html files
    $.watch(paths.html.src, ['html:dev']);
    // $.watch(paths.html.src,
    //   $.batch((events, done) => gulp.start('html:dev', done)));
    
    // Watch for changes in images files
    $.watch(paths.images.src, ['images:dev']);
    // $.watch(paths.images.src,
    //   $.batch((events, done) => gulp.start('images:dev', done)));
    
    // Watch for changes in miscellaneous files
    $.watch(paths.misc.src, ['misc:dev']);
    // $.watch(paths.misc.src,
    //   $.batch((events, done) => gulp.start('misc:dev', done)));
  }
  
  // Watch for changes in styles files
  $.watch(paths.style.watch, ['style:dev']);
  // $.watch(paths.style.watch,
  //   $.batch((events, done) => gulp.start('style:dev', done)));
}