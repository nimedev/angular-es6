/**
 * Module for help-view component.
 * @module helpView
 */
/** Angular modules */
import * as angular from 'angular';

/** Comunity modules */

/** Sub modules */

/** Component */
import component from './help-view.component';

/** Services */

// Constants
const moduleName = 'helpView';

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
            template: '<help-view></help-view>'
          }
        }
      });
  }])
  .component(component.name, component);

/** @exports module name */
export default moduleName;