/**
 * Module for rc-help component.
 * @module rcHelp
 */
/** Angular modules */
import angular from 'angular'

/** Comunity modules */

/** Sub modules */

/** Component */
import component from './rc-help.component'

/** Services */

// Constants
const moduleName = 'rcHelp'

// Variables

// Define module
angular
  .module(moduleName, [])
  .config(['$stateProvider', ($stateProvider) => {
    // Help view
    $stateProvider
      .state(moduleName, {
        url: '/help',
        views: {
          'sidenav': {
            template: '<sn-default></sn-default>'
          },
          'root-component': {
            template: '<rc-help></rc-help>'
          }
        }
      })
  }])
  .component(component.name, component)

/** @exports module name */
export default moduleName