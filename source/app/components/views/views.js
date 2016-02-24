/**
 * Module for views components.
 * @module views
 */
/** Angular modules */
import * as angular from 'angular';

/** Comunity modules */

/** Submodules */
import vwConfig from './vw-config/vw-config';
import vwHelp from './vw-help/vw-help';
import vwHome from './vw-home/vw-home';

/** Component & Directives */

/** Services */

// Constants
const moduleName = 'views';

// Variables

// Define module
angular
  .module(moduleName, [
    vwConfig,
    vwHelp,
    vwHome
  ]);

/** @exports module name */
export default moduleName;