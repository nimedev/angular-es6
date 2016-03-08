/**
 * Module for nmd-dialog component.
 * @module nmdDialog
 */
/** Angular modules */
import angular from 'angular'

/** Comunity modules */

/** Submodules */

/** Component & Directives */
import component from './nmd-dialog.component'
import directive from './dialog-watcher.directive'

/** Services */
import service from './nmd-dialog.service'

// Constants
const moduleName = 'nmdDialog'

// Variables

// Define module
angular
  .module(moduleName, [])
  .component(component.name, component)
  .service(service.name, service.service)
  .directive(directive.name, directive.directive)

/** @exports module name */
export default moduleName