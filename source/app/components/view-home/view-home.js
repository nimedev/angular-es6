/**
 * Module for view-home component.
 * @module viewHome
 */
/** Angular modules */
import angular from 'angular';

/** Comunity modules */

/** Components */
import component from './view-home.component';

/** Services */

// Constants
const moduleName = 'viewHome';

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
            template: '<sidenav-home></sidenav-home>'
          },
          'app-content': {
            template: '<view-home></view-home>'
          }
        }
      });
  }])
  .component(component.name, component);

/** @exports module name */
export default moduleName;