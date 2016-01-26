/**
 * Module for base components.
 * @module base
 */
/** Angular modules */
import * as angular from 'angular';

/** Comunity modules */

/** Components */
import comingSoon from './coming-soon/coming-soon.component';
import floatButton from './float-button/float-button.component';
import appHeader from './app-header/app-header.component';

// Constants
const moduleName = 'base';

// Define module
angular
  .module(moduleName, [
    comingSoon,
    floatButton,
    appHeader
  ]);

/** @exports module name */
export default moduleName;