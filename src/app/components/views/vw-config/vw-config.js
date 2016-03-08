/**
 * Module for vw-config component.
 * @module vwConfig
 */
/** Angular modules */
import angular from 'angular'

/** Comunity modules */

/** Submodules */

/** Component */
import component from './vw-config.component'

/** Services */

// Constants
const moduleName = 'vwConfig'

// Variables

// Define module
angular
  .module(moduleName, [])
  .config(['$stateProvider', ($stateProvider) => {
    // Config view
    $stateProvider
      .state(moduleName, {
        url: '/config',
        views: {
          'sidenav': {
            template: '<sidenav-config></sidenav-config>'
          },
          'app-content': {
            template: '<vw-config></vw-config>'
          }
        }
      })
  }])
  .component(component.name, component)

/** @exports module name */
export default moduleName