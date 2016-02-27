/**
 * @module put.strategy
 * @memberof put
 **/
'use strict';

/** PACKAGES */
/** core modules */
let path = require('path'); 

/** npm modules */

/** other modules */

// variables
const source = 'src';
const dev = 'dev';
const dist = 'dist';

/** Routes strategies for put method */
module.exports = {
  // turn on/off functions 
  flags: {
    timeRequire: true,
    lintJscs: true,
    lintJshint: true,
    autoprefixer: true,
    minifyCss: true,
    mergeMediaQueries: true
  },
  
  // Configuration for browser-sync
  server: {
    port: 3000,
    baseDir: {
      src: 'src',
      dev: 'dev'
    },
    routes: {
      '/': 'dev'
    }
  },
  
  // Misc  
  filesName: {
    styleOut: 'style.css'
  },
  
  // JSPM bundle settings
  bundle: {
    // Configuration to bundle app.js file (application files)
    app: {
      name: 'app.js',
      src: 'app/main.js',
      ignoreVendors: true
    },
    
    // Configuration to bundle dep.js file (all dependencies)
    dep: {
      name: 'dep.js',
      onlyVendors: true
    },
    
    // Configuration to bundle only angular dependencies
    ng: {
      name: 'ng.js',
      src: 'angular',
      arithmetic: '+ angular-animate + angular-aria + angular-cookies'
    },
    
    // Configuration to bundle angular material dependencies
    ngMaterial: {
      name: 'ng-material.js',
      src: 'angular-material',
      arithmetic: '- angular - angular-animate - angular-aria'
    },
    
    // Configuration to bundle others dependencies
    vendors: {
      name: 'vendors.js',
      src: 'angular-translate',
      arithmetic: '+ angular-translate-handler-log + angular-translate-loader-static-files + angular-translate-storage-cookie + angular-translate-storage-local + angular-ui-router - angular'
    }
  },
  
  // Used to replace scritp declaration in index.html file
  htmlReplace: [
    'assets/js/dep.js',
    'assets/js/app.js'
  ],
  
  // Paths for tasks
  paths: {
    // Bundle task
    bundle: {
      main: 'src/app/main.js',
      src: [
        'src/jspm_packages/system.js',
        'src/config.js'
      ],
      dest: {
        'dev': 'dev/assets/js',
        'prod': 'dist/assets/js'
      },
      watch: [
        'src/app/**/*',
        'src/assets/i18n/**/*',
        '!src/app/**/*.scss'
      ]
    },
    
    // Clean tasks
    cleanAll: [
      '.tmp/*',
      'dist/*',
      'dist/**/.*',
      '!dist/.git*'
    ],
    cleanDev: [
      'dev/*',
      'dev/**/.*'
    ],
    
    // index.html task
    html: {
      src: 'src/*.html',
      dest: {
        dev: 'dev',
        prod: 'dist'
      }
    },
    
    // i18n task. Use
    i18n: {
      src: 'src/assets/i18n/**/*',
      dest: {
        dev: 'dev/assets/i18n',
        prod: 'dist/assets/i18n'
      }
    },
    
    // Images task
    images: {
      src: 'src/assets/img/**/*',
      dest: {
        dev: 'dev/assets/img',
        prod: 'dist/assets/img'
      }
    },
    
    // Linters task
    lint: {
      src: [
        'src/app/**/*.js',
        'src/assets/js/**/*.js'
      ]
    },
    
    // Task for .htaccess, robots and others files
    misc: {
      src: [
        'src/robots.txt',
        'src/.htaccess'
      ],
      dest: {
        'dev': 'dev',
        'prod': 'dist'
      }
    },
    
    // Sass task
    style: {
      src: 'src/scss/style.scss',
      dest: {
        dev: 'dev/assets/css',
        prod: 'dist/assets/css'
      },
      watch: [
        'src/app/**/*',
        'src/scss/**/*',
        '!src/app/**/*.{js,json,html}'
      ]
    },
    
    // Used for browser-sync tasks
    reload: {
      src: [
        'src/**/*',
        'dev/**/*',
        '!src/**/*.scss'
      ],
      dev: 'dev/**/*'
    }
  }
};