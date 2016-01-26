/**
 * Module for base components.
 * @module base
 */
/** Angular modules */
import * as angular from 'angular';

/** Comunity modules */

/** Components */
import appHeader from './app-header/app-header.component';
import appSidenav from './app-sidenav/app-sidenav.component';
import comingSoon from './coming-soon/coming-soon.component';
import floatButton from './float-button/float-button.component';

// Constants
const moduleName = 'base';

// Define module
angular
  .module(moduleName, [
    appHeader,
    appSidenav,
    comingSoon,
    floatButton
  ]);

/** @exports module name */
export default moduleName;