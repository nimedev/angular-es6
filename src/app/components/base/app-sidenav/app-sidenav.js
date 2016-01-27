/**
 * Module for app-sidenav component.
 * @module appSidenav
 */
/** Angular modules */
import * as angular from 'angular';

/** Comunity modules */

/** Submodules */
import configSidenav from './config-sidenav/config-sidenav';
import homeSidenav from './home-sidenav/home-sidenav';

/** Component */
import component from './app-sidenav.comp';

/** Services */
import sideNav from './side-nav.serv';

// Constants
const moduleName = 'appSidenav';

// Variables

// Define module
angular
  .module(moduleName, [homeSidenav, configSidenav])
  .component(component.name, component)
  .service(sideNav.name, sideNav);

/** @exports module name */
export default moduleName;