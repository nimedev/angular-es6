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
import base from 'app/components/base/base.module';
import configView from 'app/components/config-view/config-view.component';
import helpView from 'app/components/help-view/help-view.component';
import homeView from 'app/components/home-view/home-view.component';

/** Shared */
import i18n from 'app/shared/i18n/i18n.module';
import theming from 'app/shared/theming/theming.module';
import templates from 'app/shared/templates/templates.module';

// Constants
const appName = 'ng-seed';

// Variables
let config;
let constants;
let htmlDocument;
let startApp;

// Config function
config = ($urlRouterProvider) => {
  // Redirect path to * urls
  $urlRouterProvider.otherwise('/');
};
config.$inject = ['$urlRouterProvider'];

// Constants object
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
    base,
    configView,
    helpView,
    homeView,

  // Shared components
    i18n,
    theming,
    'templates'
  ])
  .config(config)
  .constant('constants', constants);
 
// Load app when document is ready
htmlDocument = angular.element(document);

startApp = () => angular.bootstrap(htmlDocument, [appName]);

htmlDocument.ready(startApp);