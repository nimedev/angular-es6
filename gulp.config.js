/**
 * @module put.strategy
 * @memberof put
 **/
'use strict'

/** PACKAGES */
/** Core modules */

/** npm modules */

/** Other modules */

// Variables
const devDir = 'dev'
const srcDir = 'src'
const prodDir = 'dist'

/** Settings for gulp tasks */
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
      src: srcDir,
      dev: devDir
    },
    routes: {
      '/': devDir
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
      main: `${srcDir}/app/main.js`,
      src: [
        `${srcDir}/jspm_packages/system.js`,
        `${srcDir}/config.js`
      ],
      dest: {
        dev: `${devDir}/assets/js`,
        prod: `${prodDir}/assets/js`
      },
      watch: [
        `${srcDir}/app/**/*`,
        `${srcDir}/assets/i18n/**/*`,
        `!${srcDir}/app/**/*.scss`
      ]
    },

    // Clean tasks
    cleanAll: [
      `.tmp/*`,
      `${prodDir}/*`,
      `${prodDir}/**/.*`,
      `!${prodDir}/.git*`
    ],
    cleanDev: [
      `${devDir}/*`,
      `${devDir}/**/.*`
    ],

    // Fonts paths
    fonts: {
      src: `${srcDir}/assets/fonts/**/*`,
      dest: {
        dev: `${devDir}/assets/fonts`,
        prod: `${prodDir}/assets/fonts`
      }
    },

    // index.html task
    html: {
      src: `${srcDir}/*.html`,
      dest: {
        dev: devDir,
        prod: prodDir
      }
    },

    // i18n paths.
    i18n: {
      src: `${srcDir}/assets/i18n/**/*`,
      dest: {
        dev: `${devDir}/assets/i18n`,
        prod: `${prodDir}/assets/i18n`
      }
    },

    // Images task
    images: {
      src: `${srcDir}/assets/img/**/*`,
      dest: {
        dev: `${devDir}/assets/img`,
        prod: `${prodDir}/assets/img`
      }
    },

    // Task for .htaccess, robots and others files
    misc: {
      src: [
        `${srcDir}/robots.txt`,
        `${srcDir}/.htaccess`
      ],
      dest: {
        dev: devDir,
        prod: prodDir
      }
    },

    // Sass task
    style: {
      src: `${srcDir}/scss/style.scss`,
      dest: {
        dev: `${devDir}/assets/css`,
        prod: `${prodDir}/assets/css`
      },
      watch: [
        `${srcDir}/app/**/*`,
        `${srcDir}/scss/**/*`,
        `!${srcDir}/app/**/*.{js,json,html}`
      ]
    },

    // Used for browser-sync tasks
    reload: {
      src: [
        `${srcDir}/**/*`,
        `${devDir}/**/*`,
        `!${srcDir}/**/*.scss`
      ],
      dev: `${devDir}/**/*`
    }
  }
}