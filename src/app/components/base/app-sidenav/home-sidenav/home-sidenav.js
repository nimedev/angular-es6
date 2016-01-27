/**
 * Module for home-sidenav component.
 * @module homeSidenav
 */
/** Angular modules */
import * as angular from 'angular';

/** Comunity modules */

/** Submodules */

/** Component */
import component from './home-sidenav.comp';

/** Services */

// Constants
const moduleName = 'homeSidenav';

// Variables

// Define module
angular
  .module(moduleName, [])
  .component(component.name, component);

/** @exports module name */
export default moduleName;