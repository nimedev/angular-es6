/**
 * Module for message component.
 * @module message
 */
/** Angular modules */
import * as angular from 'angular';

/** Comunity modules */

/** Submodules */

/** Component or Directive */
import component from './message.comp';

/** Services */

// Constants
const moduleName = 'message';

// Variables

// Define module
angular
  .module(moduleName, [])
  .component(component.name, component);

/** @exports module name */
export default moduleName;