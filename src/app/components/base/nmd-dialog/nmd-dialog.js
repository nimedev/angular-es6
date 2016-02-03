/**
 * Module for nmd-dialog component.
 * @module nmdDialog
 */
/** Angular modules */
import * as angular from 'angular';

/** Comunity modules */

/** Submodules */

/** Component or Directive */
import component from './nmd-dialog.comp';
import directive from './dialog-watcher.dire';

/** Services */
import service from './nmd-dialog.serv';

// Constants
const moduleName = 'nmdDialog';

// Variables

// Define module
angular
  .module(moduleName, [])
  .component(component.name, component)
  .service(service.name, service.service)
  .directive(directive.name, directive.directive);

/** @exports module name */
export default moduleName;