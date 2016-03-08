/**
 * Main module
 * @module 'angular-es6' 
 */
/** Angular modules */
import angular from 'angular'
import ngAnimate from 'angular-animate'
import ngAria from 'angular-aria'
import ngCookies from 'angular-cookies'

/** Comunity modules */
import uiRouter from 'angular-ui-router'

/** Components */
import base from './components/base/base'
import message from './components/message/message'
import nmdComponents from './components/nmd-components/nmd-components'
import views from './components/views/views'

/** Shared */
import directives from './shared/directives/directives'
import i18n from './shared/i18n/i18n'
import services from './shared/services/services'

// Constants
const appName = 'ng-es6'
const config = {
  // server base url
  restUrl: '',

  // development mode
  dev: true
}

// Variables
let htmlDocument
let startApp

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
    views,

    // Shared components
    directives,
    i18n,
    services
  ])
  .config(['$locationProvider', '$urlRouterProvider', ($locationProvider, $urlRouterProvider) => {
    // Redirect path to * urls
    $urlRouterProvider.otherwise('/')

    // use the HTML5 History API
    $locationProvider.html5Mode(true)
  }])
  .constant('config', config)

// Log app configuration if is in development mode
if (config.dev) {
  console.log(config)
}

// Load app when document is ready
htmlDocument = angular.element(document)

startApp = () => angular.bootstrap(htmlDocument, [appName])

htmlDocument.ready(startApp)