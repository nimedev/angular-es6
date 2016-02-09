/**
 * Module for view-help component.
 * @module viewHelp
 */
/** Angular modules */
import angular from 'angular';

/** Comunity modules */

/** Sub modules */

/** Component */
import component from './view-help.component';

/** Services */

// Constants
const moduleName = 'viewHelp';

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
            template: '<home-sidenav></home-sidenav>'
          },
          'app-content': {
            template: '<view-help></view-help>'
          }
        }
      });
  }])
  .component(component.name, component);

/** @exports module name */
export default moduleName;