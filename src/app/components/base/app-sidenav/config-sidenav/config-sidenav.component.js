/**
 * Module for config-sidenav component.
 * @module configSidenav
 */
/** Angular modules */
import * as angular from 'angular';

/** Components */

/** Controller and Services */
import controller from './config-sidenav.controller';

// Constants
const componentName = 'configSidenav';
const fileName = 'config-sidenav';
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