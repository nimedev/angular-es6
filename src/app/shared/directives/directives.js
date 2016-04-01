/**
 * Module for shared directives.
 * @module directives
 */
/** Angular modules */
import angular from 'angular'

/** Comunity modules */

/** Submodules */

/** Component & Directives */
import directive from './close-dd.directive'

/** Services */

// Constants
const moduleName = 'directives'

// Variables

// Define module
angular
  .module(moduleName, [])
  .directive(directive.name, directive.factory)

/** @exports module name */
export default moduleName