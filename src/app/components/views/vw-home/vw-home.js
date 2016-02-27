/**
 * Module for vw-home component.
 * @module vwHome
 */
/** Angular modules */
import * as angular from 'angular';

/** Comunity modules */

/** Components */
import component from './vw-home.component';

/** Services */

// Constants
const moduleName = 'vwHome';

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
            template: '<vw-home></vw-home>'
          }
        }
      });
  }])
  .component(component.name, component);

/** @exports module name */
export default moduleName;