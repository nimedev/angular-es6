/**
 * Module for config-sidenav component.
 * @module configSidenav
 */
/** Angular modules */
import * as angular from 'angular';

/** Comunity modules */

/** Submodules */

/** Component */
import component from './config-sidenav.component';

/** Services */

// Constants
const moduleName = 'configSidenav';

// Variables

// Define module
angular
  .module(moduleName, [])
  .component(component.name, component);

/** @exports module name */
export default moduleName;