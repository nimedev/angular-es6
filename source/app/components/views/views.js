/**
 * Module for views components.
 * @module views
 */
/** Angular modules */
import * as angular from 'angular';

/** Comunity modules */

/** Submodules */
import viewConfig from './view-config/view-config';
import viewHelp from './view-help/view-help';
import viewHome from './view-home/view-home';

/** Component & Directives */

/** Services */

// Constants
const moduleName = 'views';

// Variables

// Define module
angular
  .module(moduleName, [
    viewConfig,
    viewHelp,
    viewHome
  ]);

/** @exports module name */
export default moduleName;