/**
 * Module for home-sidena component.
 * @module homeSidenav
 */
/** Angular modules */
import * as angular from 'angular';

/** Components */

/** Controller and Services */
import controller from './home-sidenav.controller';

// Constants
const componentName = 'homeSidenav';
const fileName = 'home-sidenav';
const root = 'app/components/base/app-sidenav/';

// Define component
angular
  .module(componentName, [])
  .component(componentName, {
    controller: controller,
    templateUrl: `${root}${fileName}/${fileName}.tmpl.html`
  });

/** @exports component name */
export default componentName;