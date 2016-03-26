/**
 * Module for message component.
 * @module message
 */
/** Angular modules */
import angular from 'angular'

/** Comunity modules */

/** Submodules */

/** Component or Directive */
import component from './message.component'

/** Services */

// Constants
const moduleName = 'message'

// Variables

// Define module
angular
  .module(moduleName, [])
  .component(component.name, component)

/** @exports module name */
export default moduleName