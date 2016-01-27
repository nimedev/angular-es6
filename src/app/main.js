/**
 * Main module
 * @module 'angular-seed' 
 */
/** Angular modules */
import * as angular from 'angular';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngCookies from 'angular-cookies';

/** Comunity modules */
import uiRouter from 'angular-ui-router';

/** Components */
import base from 'app/components/base/base';
import configView from 'app/components/config-view/config-view';
import helpView from 'app/components/help-view/help-view';
import homeView from 'app/components/home-view/home-view';

/** Shared */
import i18n from 'app/shared/i18n/i18n';
import theming from 'app/shared/theming/theming';

// Constants
const appName = 'ng-seed';

// Variables
let constants;
let htmlDocument;
let startApp;

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
    ngAnimate,
    ngAria,
    ngCookies,

  // Comunity modules
    uiRouter,

  // Components
    base,
    configView,
    helpView,
    homeView,

  // Shared components
    i18n,
    theming
  ])
  .config(['$urlRouterProvider', ($urlRouterProvider) => {
    // Redirect path to * urls
    $urlRouterProvider.otherwise('/');
  }])
  .constant('constants', constants);
 
// Load app when document is ready
htmlDocument = angular.element(document);

startApp = () => angular.bootstrap(htmlDocument, [appName]);

htmlDocument.ready(startApp);