/**
 * Module for home-view component.
 * @module homeView
 */
/** Angular modules */
import * as angular from 'angular';

/** Comunity modules */

/** Components */
import component from './home-view.comp';

/** Services */

// Constants
const moduleName = 'homeView';

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
            template: '<home-sidenav></home-sidenav>'
          },
          'app-content': {
            template: '<home-view></home-view>'
          }
        }
      });
  }])
  .component(component.name, component);

/** @exports module name */
export default moduleName;