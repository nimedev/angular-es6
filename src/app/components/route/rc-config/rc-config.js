/**
 * Module for rc-config component.
 * @module rcConfig
 */
/** Angular modules */
import angular from 'angular'

/** Comunity modules */

/** Submodules */

/** Component */
import component from './rc-config.component'

/** Services */

// Constants
const moduleName = 'rcConfig'

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
          'root-component': {
            template: '<rc-config></rc-config>'
          }
        }
      })
  }])
  .component(component.name, component)

/** @exports module name */
export default moduleName