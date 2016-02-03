/**
 * Module for menu-item component.
 * @module menuItem
 */
/** Angular modules */
import * as angular from 'angular';

/** Comunity modules */

/** Submodules */

/** Component or Directive */
import component from './menu-item.comp';

/** Services */

// Constants
const moduleName = 'menuItem';

// Variables

// Define module
angular
  .module(moduleName, [])
  .component(component.name, component);

/** @exports module name */
export default moduleName;