/**
 * Module for sn-default component.
 * This component contain default sidenav view.
 * @module snDefault
 */
/** Angular modules */
import angular from 'angular'

/** Comunity modules */

/** Submodules */

/** Component */
import component from './sn-default.component'

/** Services */

// Constants
const moduleName = 'snDefault'

// Variables

// Define module
angular
  .module(moduleName, [])
  .component(component.name, component)

/** @exports module name */
export default moduleName