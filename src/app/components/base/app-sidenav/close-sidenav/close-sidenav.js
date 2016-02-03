/**
 * Module for close-sidenav component.
 * @module closeSidenav
 */
/** Angular modules */
import * as angular from 'angular';

/** Comunity modules */

/** Submodules */

/** Component or Directive */
import directive from './close-sidenav.dire';

/** Services */

// Constants
const moduleName = 'closeSidenav';

// Variables

// Define module
angular
  .module(moduleName, [])
  .directive(directive.name, directive.directive);

/** @exports module name */
export default moduleName;