/**
 * Module for header component.
 * @module appHeader
 */
/** Angular modules */
import * as angular from 'angular';

/** Components */
import controller from './app-header.controller';
import {serviceName, appHeader} from './app-header.service';

// Constants
const componentName = 'appHeader';
const fileName = 'app-header';
const root = 'app/components/base/';

// Define component
angular
  .module(componentName, [])
  .component(componentName, {
    controller: controller,
    templateUrl: `${root}${fileName}/${fileName}.tmpl.html`
  })
  .service(serviceName, appHeader);

/** @exports component name */
export default componentName;