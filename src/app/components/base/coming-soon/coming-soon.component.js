/**
 * Module for coming-soon component
 * @module coming-soon
 */
/** Angular modules */
import * as angular from 'angular';

// Constants
const root = 'app/components/base/';
const componentName = 'comingSoon';
const fileName = 'coming-soon';

// Define component
angular
  .module(componentName, [])
  .component(componentName, {
    bindings: {
      title: '@'
    },
    templateUrl: `${root}${fileName}/${fileName}.tmpl.html`
  });
  
/** @exports component name */
export default componentName;