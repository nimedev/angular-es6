/**
 * Module for vw-help component.
 * @module vwHelp
 */
/** Angular modules */
import * as angular from 'angular';

/** Comunity modules */

/** Sub modules */

/** Component */
import component from './vw-help.component';

/** Services */

// Constants
const moduleName = 'vwHelp';

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
            template: '<sidenav-home></sidenav-home>'
          },
          'app-content': {
            template: '<vw-help></vw-help>'
          }
        }
      });
  }])
  .component(component.name, component);

/** @exports module name */
export default moduleName;