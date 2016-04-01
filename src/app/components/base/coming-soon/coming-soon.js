/**
 * Module for coming-soon component.
 * @module comingSoon
 */
/** Angular modules */
import angular from 'angular'

/** Comunity modules */

/** Submodules */

/** Component */
import component from './coming-soon.component'

/** Services */

// Constants
const moduleName = 'comingSoon'

// Variables

// Define module
angular
  .module(moduleName, [])
  .component(component.name, component.options)

/** @exports module name */
export default moduleName