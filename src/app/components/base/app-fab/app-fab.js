/**
 * Module for app-fab component.
 * @module appFab
 */
/** Angular modules */
import angular from 'angular'

/** Comunity modules */

/** Submodules */

/** Component & Directives */
import component from './app-fab.component'

/** Services */

// Constants
const moduleName = 'appFab'

// Variables

// Define module
angular
  .module(moduleName, [])
  .component(component.name, component)

/** @exports module name */
export default moduleName