/**
 * Module for lang-list component.
 * @module langList
 */
/** Angular modules */
import * as angular from 'angular';

/** Components */

/** Controller and Services */
import controller from './lang-list.controller';

// Constants
const componentName = 'langList';
const fileName = 'lang-list';
const root = 'app/components/base/app-header/';

// Define component
angular
  .module(componentName, [])
  .component(componentName, {
    controller: controller,
    templateUrl: `${root}${fileName}/${fileName}.tmpl.html`
  });

/** @exports component name */
export default componentName;