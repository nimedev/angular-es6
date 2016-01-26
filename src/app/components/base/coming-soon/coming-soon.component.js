/**
 * Module for coming-soon component
 * @module comingSoon
 */
/** Angular modules */
import * as angular from 'angular';

// Constants
const componentName = 'comingSoon';
const fileName = 'coming-soon';
const root = 'app/components/base/';

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