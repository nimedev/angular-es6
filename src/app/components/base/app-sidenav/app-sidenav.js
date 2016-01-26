/**
 * Module for app-sidenav component.
 * @module appSidenav
 */
/** Angular modules */
import * as angular from 'angular';

/** Comunity modules */

/** Submodules */
import homeSidenav from './home-sidenav/home-sidenav.component';
import configSidenav from './config-sidenav/config-sidenav.component';

/** Component */
import component from './app-sidenav.component';

/** Services */
import sideNav from './side-nav.service';

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