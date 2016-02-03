/**
 * Module for base components.
 * @module base
 */
/** Angular modules */
import * as angular from 'angular';

/** Comunity modules */

/** Submodules */
import appHeader from './app-header/app-header';
import appSidenav from './app-sidenav/app-sidenav';
import comingSoon from './coming-soon/coming-soon';
import floatButton from './float-button/float-button';
import nmdDialog from './nmd-dialog/nmd-dialog';

/** Component */

/** Services */

// Constants
const moduleName = 'base';

// Variables

// Define module
angular
  .module(moduleName, [
    appHeader,
    appSidenav,
    comingSoon,
    floatButton,
    nmdDialog
  ]);

/** @exports module name */
export default moduleName;