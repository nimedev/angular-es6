/**
 * Module for config-view component.
 * @module configView
 */
/** Angular modules */
import angular from 'angular';

/** Comunity modules */

/** Submodules */

/** Component */
import component from './config-view.component';

/** Services */

// Constants
const moduleName = 'configView';

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
            template: '<config-sidenav></config-sidenav>'
          },
          'app-content': {
            template: '<config-view></config-view>'
          }
        }
      });
  }])
  .component(component.name, component);

/** @exports module name */
export default moduleName;