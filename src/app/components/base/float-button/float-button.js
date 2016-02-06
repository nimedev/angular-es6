/**
 * Module for float-button component.
 * @module floatButton
 */
/** Angular modules */
import angular from 'angular';

/** Comunity modules */

/** Submodules */

/** Component & Directives */
import component from './float-button.component';
import fabWatcher from './fab-watcher.directive';

/** Services */

// Constants
const moduleName = 'floatButton';

// Variables

// Define module
angular
  .module(moduleName, [])
  .component(component.name, component)
  .directive(fabWatcher.name, fabWatcher.directive);

/** @exports module name */
export default moduleName;