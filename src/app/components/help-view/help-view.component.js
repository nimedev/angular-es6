/**
 * Module for help-view component.
 * @module helpView
 */
/** Angular modules */
import * as angular from 'angular';

/** Components */

/** Controller and Services */

// Constants
const componentName = 'helpView';
const fileName = 'help-view';
const root = 'app/components/';

// Variables
let config;

// Config function
config = ($stateProvider) => {
  // Help view
  $stateProvider
    .state(componentName, {
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