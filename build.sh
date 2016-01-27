#!/bin/bash

# Bundle sfx
jspm bundle-sfx app/main.js dist/assets/js/main.min.js --minify --skip-source-maps

#
# jspm unbundle
# jspm bundle app/main.js src/build.min.js --minify --inject --skip-source-maps
# jspm bundle app/main.js src/build.min.js --minify --skip-source-maps

# Bundle app
# jspm bundle app/main.js - angular - angular-animate - angular-aria - angular-cookies - angular-material - angular-translate - angular-translate-handler-log - angular-translate-loader-static-files - angular-translate-storage-cookie - angular-translate-storage-local - angular-ui-router dist/assets/js/main.min.js --minify --skip-source-maps

# Bundle angular
# jspm bundle angular + angular-animate + angular-aria + angular-cookies dist/assets/js/ng.min.js --minify --skip-source-maps

# Bundle angular-material
# jspm bundle angular-material - angular - angular-animate - angular-aria dist/assets/js/ng-material.min.js --minify --skip-source-maps

# Bundle vendors
# jspm bundle angular-translate + angular-translate-handler-log + angular-translate-loader-static-files + angular-translate-storage-cookie + angular-translate-storage-local + angular-ui-router - angular dist/assets/js/vendors.min.js --minify --skip-source-maps