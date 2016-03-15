/**
 * Main module
 * @module 'angular-es6' 
 */
/** Angular modules */
import angular from 'angular'
import ngAnimate from 'angular-animate'
import ngAria from 'angular-aria'
import ngCookies from 'angular-cookies'

/** Components */
import base from './components/base/base'
import message from './components/message/message'
import nmdComponents from './components/nmd-components/nmd-components'
import route from './components/route/route'

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

    // Components
    base,
    message,
    nmdComponents,
    route,

    // Shared components
    directives,
    i18n,
    services
  ])
  .constant('config', config)

// Log app configuration if is in development mode
if (config.dev) {
  console.log(config)
}

// Load app when document is ready
htmlDocument = angular.element(document)

startApp = () => angular.bootstrap(htmlDocument, [appName])

htmlDocument.ready(startApp)