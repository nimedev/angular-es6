/**
 * Module for vw-about view component.
 * @module vwAbout
 */
/** Angular modules */
import angular from 'angular'

/** Comunity modules */

/** Submodules */

/** Component & Directives */

/** Services */

// Constants
const moduleName = 'vwAbout'

// Variables

// Define module
angular
  .module(moduleName, [])
  .config(['$stateProvider', ($stateProvider) => {
    // Config view
    $stateProvider
      .state(moduleName, {
        url: '/about',
        views: {
          'sidenav': {
            template: '<sidenav-config></sidenav-config>'
          },
          'app-content': {
            template: '<app-waiting></app-waiting>'
          }
        }
      })
  }])

/** @exports module name */
export default moduleName