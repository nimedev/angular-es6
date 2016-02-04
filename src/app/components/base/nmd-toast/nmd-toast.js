/**
 * Module for nmd-toast component.
 * @module nmdToast
 */
/** Angular modules */
import * as angular from 'angular';

/** Comunity modules */

/** Submodules */

/** Component or Directive */
import component from './nmd-toast.component';

/** Services */

// Constants
const moduleName = 'nmdToast';

// Variables

// Define module
angular
  .module(moduleName, [])
  .component(component.name, component);

/** @exports module name */
export default moduleName;