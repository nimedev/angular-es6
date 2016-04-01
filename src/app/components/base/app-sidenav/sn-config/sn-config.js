/**
 * Module for sn-config component.
 * This component contain sidenav view for config page
 * @module snConfig
 */
/** Angular modules */
import angular from 'angular'

/** Comunity modules */

/** Submodules */

/** Component */
import component from './sn-config.component'

/** Services */

// Constants
const moduleName = 'snConfig'

// Variables

// Define module
angular
  .module(moduleName, [])
  .component(component.name, component.options)

/** @exports module name */
export default moduleName