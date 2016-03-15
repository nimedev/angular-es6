/**
 * Module for rc-about view component.
 * @module rcAbout
 */
/** Angular modules */
import angular from 'angular'

/** Comunity modules */

/** Submodules */

/** Component & Directives */

/** Services */

// Constants
const moduleName = 'rcAbout'

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
          'root-component': {
            template: '<app-waiting></app-waiting>'
          }
        }
      })
  }])

/** @exports module name */
export default moduleName