/**
 * Module for nmd-progress-linear component.
 * @module nmdProgress
 */
/** Angular modules */
import angular from 'angular'

/** Comunity modules */

/** Submodules */

/** Component & Directives */
import component from './nmd-progress-linear.component'

/** Services */

// Constants
const moduleName = 'nmdProgressLinear'

// Variables

// Define module
angular
  .module(moduleName, [])
  .component(component.name, component.options)

/** @exports module name */
export default moduleName