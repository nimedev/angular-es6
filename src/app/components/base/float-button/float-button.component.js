/**
 * Module for main float FAB button.
 * @module floatButton
 */
/** Angular modules */
import * as angular from 'angular';

// Constants
const componentName = 'floatButton';
const fileName = 'float-button';
const root = 'app/components/base/';

// Define component
angular
  .module(componentName, [])
  .component(componentName, {
    templateUrl: `${root}${fileName}/${fileName}.tmpl.html`
  });

/** @exports component name */
export default componentName;