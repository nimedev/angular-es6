/**
 * Module for shared directives.
 * @module directives
 */
/** Angular modules */
import * as angular from 'angular';

/** Comunity modules */

/** Submodules */
import closeDd from './close-dd/close-dd';

/** Component */

/** Services */

// Constants
const moduleName = 'directives';

// Variables

// Define module
angular
  .module(moduleName, [closeDd]);

/** @exports module name */
export default moduleName;