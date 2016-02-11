/**
 * Main module
 * @module 'angular-es6' 
 */
/** Angular modules */
import angular from 'angular';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngCookies from 'angular-cookies';

/** Comunity modules */
import uiRouter from 'angular-ui-router';

/** Components */
import base from 'app/components/base/base';
import message from 'app/components/message/message';
import nmdComponents from 'app/components/nmd-components/nmd-components';
import viewConfig from 'app/components/view-config/view-config';
import viewHelp from 'app/components/view-help/view-help';
import viewHome from 'app/components/view-home/view-home';

/** Shared */
import directives from 'app/shared/directives/directives';
import i18n from 'app/shared/i18n/i18n';
import services from 'app/shared/services/services';

// Constants
const appName = 'ng-es6';

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
    message,
    nmdComponents,
    viewConfig,
    viewHelp,
    viewHome,

  // Shared components
    directives,
    i18n,
    services
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