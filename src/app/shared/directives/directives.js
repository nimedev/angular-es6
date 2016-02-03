/**
 * Module for shared directives.
 * @module directives
 */
/** Angular modules */
import * as angular from 'angular';

/** Comunity modules */

/** Submodules */

/** Component & Directives */
import directive from './close-dd.dire';

/** Services */

// Constants
const moduleName = 'directives';

// Variables

// Define module
angular
  .module(moduleName, [])
  .directive(directive.name, directive.directive);

/** @exports module name */
export default moduleName;