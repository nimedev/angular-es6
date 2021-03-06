/**
 * Module for nmd-dialog component.
 * Use directive instead component to add component template to directive 
 * template because in component this don't work.
 * @module nmdDialog
 */
/** Angular modules */
import angular from 'angular'

/** Comunity modules */

/** Submodules */

/** Component & Directives */
import directive from './nmd-dialog.directive'

/** Services */
import service from './nmd-dialog.service'

// Constants
const moduleName = 'nmdDialog'

// Variables

// Define module
angular
  .module(moduleName, [])
  .service(service.name, service.constructor)
  .directive(directive.name, directive.factory)

/** @exports module name */
export default moduleName