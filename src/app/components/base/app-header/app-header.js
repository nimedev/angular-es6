/**
 * Module for app-header component.
 * @module header
 */
/** Angular modules */
import * as angular from 'angular';

/** Comunity modules */

/** Submodules */
import langList from './lang-list/lang-list';

/** Component */
import component from './app-header.component';

/** Services */
import headerNav from './header-nav.service';

// Constants
const moduleName = 'header';

// Variables

// Define module
angular
  .module(moduleName, [langList])
  .component(component.name, component)
  .service(headerNav.name, headerNav);

/** @exports module name */
export default moduleName;