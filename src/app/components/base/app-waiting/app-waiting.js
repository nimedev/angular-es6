/**
 * Module for app-waiting component.
 * @module appWaiting
 */
/** Angular modules */
import angular from 'angular'

/** Comunity modules */

/** Submodules */

/** Component & Directives */
import component from './app-waiting.component'

/** Services */

// Constants
const moduleName = 'appWaiting'

// Variables

// Define module
angular
  .module(moduleName, [])
  .component(component.name, component)

/** @exports module name */
export default moduleName