/**
 * Module for nmd-toast component.
 * @module nmdToast
 */
/** Angular modules */
import angular from 'angular'

/** Comunity modules */

/** Submodules */

/** Component & Directives */
import component from './nmd-toast.component'

/** Services */
import service from './nmd-toast.service'

// Constants
const moduleName = 'nmdToast'

// Variables

// Define module
angular
  .module(moduleName, [])
  .component(component.name, component.options)
  .service(service.name, service.constructor)

/** @exports module name */
export default moduleName