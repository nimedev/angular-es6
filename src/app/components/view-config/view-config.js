/**
 * Module for view-config component.
 * @module viewConfig
 */
/** Angular modules */
import angular from 'angular';

/** Comunity modules */

/** Submodules */

/** Component */
import component from './view-config.component';

/** Services */

// Constants
const moduleName = 'viewConfig';

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
          'app-content': {
            template: '<view-config></view-config>'
          }
        }
      });
  }])
  .component(component.name, component);

/** @exports module name */
export default moduleName;