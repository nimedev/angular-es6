/**
 * Module for close-dd component.
 * @module closeDd
 */
/** Angular modules */
import * as angular from 'angular';

/** Comunity modules */

/** Submodules */

/** directive */
import directive from './close-dd.dire';

/** Services */

// Constants
const moduleName = 'closeDd';

// Variables

// Define module
angular
  .module(moduleName, [])
  .directive(directive.name, directive.directive);

/** @exports module name */
export default moduleName;