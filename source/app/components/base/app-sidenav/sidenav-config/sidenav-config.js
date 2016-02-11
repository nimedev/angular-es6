/**
 * Module for sidenav-config component.
 * @module sidenavConfig
 */
/** Angular modules */
import angular from 'angular';

/** Comunity modules */

/** Submodules */

/** Component */
import component from './sidenav-config.component';

/** Services */

// Constants
const moduleName = 'sidenavConfig';

// Variables

// Define module
angular
  .module(moduleName, [])
  .component(component.name, component);

/** @exports module name */
export default moduleName;