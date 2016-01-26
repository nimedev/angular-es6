/**
 * Module for app-sidenav component.
 * @module appSidenav
 */
/** Angular modules */
import * as angular from 'angular';

/** Components */
import homeSidenav from './home-sidenav/home-sidenav.component';
import configSidenav from './config-sidenav/config-sidenav.component';

/** Controller and Services */
import controller from './app-sidenav.controller';
import {serviceName, sideNav} from './app-sidenav.service';

// Constants
const componentName = 'appSidenav';
const fileName = 'app-sidenav';
const root = 'app/components/base/';

// Define component
angular
  .module(componentName, [homeSidenav, configSidenav])
  .component(componentName, {
    controller: controller,
    templateUrl: `${root}${fileName}/${fileName}.tmpl.html`
  })
  .service(serviceName, sideNav);

/** @exports component name */
export default componentName;