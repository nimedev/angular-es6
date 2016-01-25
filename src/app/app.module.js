/**
 * Main module
 * @module 'angular-seed' 
 */
/** Angular modules */
import * as angular from 'angular';
import * as angularAnimate from 'angular-animate';
import * as angularAria from 'angular-aria';
import * as angularCookies from 'angular-cookies';

/** Comunity modules */
import * as angularUiRouter from 'angular-ui-router';

/** Components */

/** Shared */
import i18n from 'app/shared/i18n/i18n.module';
import templates from 'app/shared/templates/templates.module';

/** Constants */
const appName = 'ng-seed';

/** Variables */
let config;
let constants;
let htmlDocument;
let startApp;

/** Config function */
config = ($urlRouterProvider) => {
  // Redirect path to * urls
  $urlRouterProvider.otherwise('/');
};
config.$inject = ['$urlRouterProvider'];

/** Constants object */
constants = {
  // server base url
  REST_URL: '',

  // Debug mode
  DEBUG: true
};

// Define angular app.
angular
  .module(appName, [
  // Angular modules
    'ngAnimate',
    'ngAria',
    'ngCookies',

  // Comunity modules
    'ui.router',

  // Components

  // Shared components
    i18n,
    'templates'
  ])
  .config(config)
  .constant('constants', constants);
 
/** Load app */
htmlDocument = angular.element(document);

startApp = () => angular.bootstrap(htmlDocument, [appName]);

htmlDocument.ready(startApp);