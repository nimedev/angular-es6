/**
 * Module for float-button component.
 * @module floatButton
 */
/** Angular modules */
import * as angular from 'angular';

/** Comunity modules */

/** Submodules */

/** Component */
import component from './float-button.component';

/** Services */

// Constants
const moduleName = 'floatButton';

// Variables

// Define module
angular
  .module(moduleName, [])
  .component(component.name, component);

/** @exports module name */
export default moduleName;