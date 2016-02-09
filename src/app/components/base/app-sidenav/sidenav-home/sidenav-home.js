/**
 * Module for sidenav-home component.
 * @module sidenavHome
 */
/** Angular modules */
import angular from 'angular';

/** Comunity modules */

/** Submodules */

/** Component */
import component from './sidenav-home.component';

/** Services */

// Constants
const moduleName = 'sidenavHome';

// Variables

// Define module
angular
  .module(moduleName, [])
  .component(component.name, component);

/** @exports module name */
export default moduleName;