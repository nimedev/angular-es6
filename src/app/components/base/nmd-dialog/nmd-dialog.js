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

/** Services */

// Constants
const moduleName = 'nmdDialog';

// Variables

// Define module
angular
  .module(moduleName, [])
  .component(component.name, component);

/** @exports module name */
export default moduleName;