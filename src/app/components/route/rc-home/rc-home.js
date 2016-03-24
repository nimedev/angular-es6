/**
 * Module for rc-home component.
 * @module rcHome
 */
/** Angular modules */
import angular from 'angular'

/** Comunity modules */

/** Components */
import component from './rc-home.component'

/** Services */

// Constants
const moduleName = 'rcHome'

// Variables

// Define module
angular
  .module(moduleName, [])
  .config(['$stateProvider', ($stateProvider) => {
    // Home view
    $stateProvider
      .state(moduleName, {
        url: '/',
        views: {
          'sidenav': {
            template: '<sn-default></sn-default>'
          },
          'root-route': {
            template: '<rc-home></rc-home>'
          }
        }
      })
  }])
  .component(component.name, component)

/** @exports module name */
export default moduleName