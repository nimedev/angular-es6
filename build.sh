#!/bin/bash

# Bundle sfx
# jspm bundle-sfx app/main.js .tmp/build.min.js --minify --skip-source-maps

#
# jspm bundle app/main.js .tmp/build.min.js --skip-source-maps

# Bundle app
jspm bundle app/main.js - angular - angular-animate - angular-aria - angular-cookies - angular-material - angular-translate - angular-translate-handler-log - angular-translate-loader-static-files - angular-translate-storage-cookie - angular-translate-storage-local - angular-ui-router .tmp/app.js --minify --skip-source-maps

# Bundle angular
jspm bundle angular + angular-animate + angular-aria + angular-cookies .tmp/ng.js --minify --skip-source-maps

# Bundle angular-material
jspm bundle angular-material - angular - angular-animate - angular-aria .tmp/ng-material.js --minify --skip-source-maps

# Bundle vendors
jspm bundle angular-translate + angular-translate-handler-log + angular-translate-loader-static-files + angular-translate-storage-cookie + angular-translate-storage-local + angular-ui-router - angular .tmp/vendors.js --minify --skip-source-maps