/**
 * Module for app-sidenav component.
 * @module appSidenav
 */
/** Angular modules */
import angular from 'angular';

/** Comunity modules */

/** Submodules */
import configSidenav from './config-sidenav/config-sidenav';
import homeSidenav from './home-sidenav/home-sidenav';
import menuItem from './menu-item/menu-item';

/** Component & Directives */
import component from './app-sidenav.component';
import directive from './close-sidenav.directive';

/** Services */
import sideNav from './side-nav.service';

// Constants
const moduleName = 'appSidenav';

// Variables

// Define module
angular
  .module(moduleName, [
    homeSidenav,
    configSidenav,
    menuItem
  ])
  .component(component.name, component)
  .service(sideNav.name, sideNav.service)
  .directive(directive.name, directive.directive);

/** @exports module name */
export default moduleName;