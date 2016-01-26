/**
 * Module for header component.
 * @module appHeader
 */
/** Angular modules */
import * as angular from 'angular';

/** Components */
import langList from './lang-list/lang-list';

/** Controller and Services */
import controller from './app-header.controller';
import {serviceName, appHeader} from './app-header.service';

// Constants
const componentName = 'appHeader';
const fileName = 'app-header';
const root = 'app/components/base/';

// Define component
angular
  .module(componentName, [langList])
  .component(componentName, {
    controller: controller,
    templateUrl: `${root}${fileName}/${fileName}.tmpl.html`
  })
  .service(serviceName, appHeader);

/** @exports component name */
export default componentName;