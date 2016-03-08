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
import toastWatcher from './toast-watcher.directive'

/** Services */
import service from './nmd-toast.service'

// Constants
const moduleName = 'nmdToast'

// Variables

// Define module
angular
  .module(moduleName, [])
  .component(component.name, component)
  .service(service.name, service.service)
  .directive(toastWatcher.name, toastWatcher.directive)

/** @exports module name */
export default moduleName