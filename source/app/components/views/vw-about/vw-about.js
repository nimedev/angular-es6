/**
 * Module for vw-about view component.
 * @module vwAbout
 */
/** Angular modules */
import * as angular from 'angular';

/** Comunity modules */

/** Submodules */

/** Component & Directives */
import component from './vw-about.component';

/** Services */

// Constants
const moduleName = 'vwAbout';

// Variables

// Define module
angular
  .module(moduleName, [])
  .config(['$stateProvider', ($stateProvider) => {
    // Config view
    $stateProvider
      .state(moduleName, {
        url: '/about',
        views: {
          'sidenav': {
            template: '<sidenav-config></sidenav-config>'
          },
          'app-content': {
            template: '<vw-about></vw-about>'
          }
        }
      });
  }])
  .component(component.name, component);

/** @exports module name */
export default moduleName;