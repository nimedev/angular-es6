/**
 * Module for home-view component.
 * @module homeView
 */
/** Angular modules */
import * as angular from 'angular';

/** Components */

/** Controller and Services */

// Constants
const componentName = 'homeView';
const fileName = 'home-view';
const root = 'app/components/';

// Variables
let config;

// Config function
config = ($stateProvider) => {
  // Help view
  $stateProvider
    .state(componentName, {
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
};
config.$inject = ['$stateProvider'];

// Define component
angular
  .module(componentName, [])
  .config(config)
  .component(componentName, {
    templateUrl: `${root}${fileName}/${fileName}.tmpl.html`
  });

/** @exports component name */
export default componentName;