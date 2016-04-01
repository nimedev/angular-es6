/**
 * Module for lang-list component.
 * @module langList
 */

/** Angular modules */
import angular from 'angular'

/** Comunity modules */

/** Submodules */

/** Component */
import component from './lang-list.component'

/** Services */

// Constants
const moduleName = 'langList'

// Variables

// Define module
angular
  .module(moduleName, [])
  .component(component.name, component.options)

/** @exports module name */
export default moduleName