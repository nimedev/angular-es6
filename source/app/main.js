/**
 * Main module
 * @module 'angular-es6' 
 */
/** Angular modules */
import * as angular from 'angular';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngCookies from 'angular-cookies';

/** Comunity modules */
import uiRouter from 'angular-ui-router';

/** Configuration */
import appConfig from 'app/app-config';

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
const appName = appConfig.appName;

// Variables
let hostname = window.location.hostname;
let config = appConfig.production;
let devConfig = appConfig.development;
let htmlDocument;
let startApp;

// Merge development configurations if the hostname is not on the 
// production list
if (appConfig.productionHosts.indexOf(hostname) < 0) {
  for (let prop in devConfig) {
    // skip loop if the property is from prototype
    if (!devConfig.hasOwnProperty(prop)) {
      continue;
    }
    
    // Copy properties
    config[prop] = appConfig.development[prop];
  }
}

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
  .config(['$locationProvider', '$urlRouterProvider', ($locationProvider, $urlRouterProvider) => {
    // Redirect path to * urls
    $urlRouterProvider.otherwise('/');
    
    // use the HTML5 History API
    $locationProvider.html5Mode(true);
  }])
  .constant('config', config);

// Log app configuration if is in development mode
if (config.dev) {
  console.log(config);
}

// Load app when document is ready
htmlDocument = angular.element(document);

startApp = () => angular.bootstrap(htmlDocument, [appName]);

htmlDocument.ready(startApp);