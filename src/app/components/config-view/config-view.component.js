/**
 * Module for config-view component.
 * @module configView
 */
/** Angular modules */
import * as angular from 'angular';

/** Components */

/** Controller and Services */

// Constants
const componentName = 'configView';
const fileName = 'config-view';
const root = 'app/components/';

// Variables
let config;

// Config function
config = ($stateProvider) => {
  // Config view
  $stateProvider
    .state(componentName, {
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
};
config.$inject = ['$stateProvider'];

// Define component
angular
  .module(componentName, [])
  .config(config)
  .component(componentName, {
          template: '<coming-soon class="config-view" title="Configuration"></coming-soon>'
    // templateUrl: `${root}${fileName}/${fileName}.tmpl.html`
  });

/** @exports component name */
export default componentName;