/**
 * Module for app-sidenav component.
 * @module appSidenav
 */
/** Angular modules */
import * as angular from 'angular';

/** Comunity modules */

/** Submodules */
import menuItem from './menu-item/menu-item';
import sidenavConfig from './sidenav-config/sidenav-config';
import sidenavHome from './sidenav-home/sidenav-home';

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
    menuItem,
    sidenavHome,
    sidenavConfig
  ])
  .component(component.name, component)
  .service(sideNav.name, sideNav.service)
  .directive(directive.name, directive.directive);

/** @exports module name */
export default moduleName;