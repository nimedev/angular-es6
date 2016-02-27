/**
 * Module for app-fab component.
 * @module appFab
 */
/** Angular modules */
import * as angular from 'angular';

/** Comunity modules */

/** Submodules */

/** Component & Directives */
import component from './app-fab.component';
import fabWatcher from './fab-watcher.directive';

/** Services */

// Constants
const moduleName = 'appFab';

// Variables

// Define module
angular
  .module(moduleName, [])
  .component(component.name, component)
  .directive(fabWatcher.name, fabWatcher.directive);

/** @exports module name */
export default moduleName;