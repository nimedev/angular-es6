/** 
 * Module for angular material. 
 * @module theming
 */
/** Angular modules */
import * as angular from 'angular';

/** Comunity modules */
import * as angularMaterial from 'angular-material';

/** Constants */
const moduleName = 'theming';

/** Variables */
let config;

/** Config function */
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
  .module(moduleName, ['ngMaterial'])
  .config(config);

/** Exports module name */
export default moduleName;