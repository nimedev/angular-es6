/**
 * Module for base components.
 * @module base
 */
/** Angular modules */
import * as angular from 'angular';

/** Comunity modules */

/** Submodules */
import appFab from './app-fab/app-fab';
import appHeader from './app-header/app-header';
import appSidenav from './app-sidenav/app-sidenav';
import comingSoon from './coming-soon/coming-soon';

/** Component */

/** Services */

// Constants
const moduleName = 'base';

// Variables

// Define module
angular
  .module(moduleName, [
    appFab,
    appHeader,
    appSidenav,
    comingSoon
  ]);

/** @exports module name */
export default moduleName;