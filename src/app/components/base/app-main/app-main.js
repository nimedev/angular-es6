/**
 * Module for app-main component.
 * @module appMain
 */
/** Angular modules */
import * as angular from 'angular';

/** Comunity modules */

/** Submodules */

/** Component & Directives */
import component from './app-main.component';

/** Services */

// Constants
const moduleName = 'appMain';

// Variables

// Define module
angular
  .module(moduleName, [])
  .component(component.name, component);

/** @exports module name */
export default moduleName;