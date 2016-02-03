/**
 * Module for app-sidenav component.
 * @module appSidenav
 */
/** Angular modules */
import * as angular from 'angular';

/** Comunity modules */

/** Submodules */
import closeSidenav from './close-sidenav/close-sidenav';
import configSidenav from './config-sidenav/config-sidenav';
import homeSidenav from './home-sidenav/home-sidenav';
import menuItem from './menu-item/menu-item';

/** Component */
import component from './app-sidenav.comp';

/** Services */
import sideNav from './side-nav.serv';

// Constants
const moduleName = 'appSidenav';

// Variables

// Define module
angular
  .module(moduleName, [
    closeSidenav,
    homeSidenav,
    configSidenav,
    menuItem
  ])
  .component(component.name, component)
  .service(sideNav.name, sideNav.service);

/** @exports module name */
export default moduleName;