/** 
 * Module for angular material. 
 * @module theming
 */
/** Angular modules */
import * as angular from 'angular';

/** Comunity modules */
import ngMaterial from 'angular-material';
import 'jspm_packages/npm/angular-material@1.0.2/angular-material.min.css!';

// Constants
const moduleName = 'theming';

// Variables
let config;

// Config function
config = ($mdThemingProvider) => {
  // angular-material Theming
  $mdThemingProvider.theme('default')
  /** default: 500, hue-1: 300, hue-2: 800, hue-3: A100 */
    .primaryPalette('grey')
    .accentPalette('deep-orange');
};
config.$inject = ['$mdThemingProvider'];

// Define module
angular
  .module(moduleName, [ngMaterial])
  .config(config);

/** @exports module name */
export default moduleName;