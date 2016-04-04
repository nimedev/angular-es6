/**
 * Main module
 * @module main 
 */
/** Angular modules */
import angular from 'angular'
import ngAnimate from 'angular-animate'
import ngAria from 'angular-aria'
import ngCookies from 'angular-cookies'

/** Comunity modules */

/** Components */
import base from './components/base/base'
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
    nmdComponents,
    route,

    // Shared components
    directives,
    i18n,
    services
  ])
  .config(['$logProvider', $logProvider => {
    if (!config.dev) {
      $logProvider.debugEnabled(false)
    }
  }])
  .run(['$log', $log => $log.debug('[main] Config object', config)])
  .constant('config', config)

// Load app when document is ready
htmlDocument = angular.element(document)

startApp = () => angular.bootstrap(htmlDocument, [appName])

htmlDocument.ready(startApp)