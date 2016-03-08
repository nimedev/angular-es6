/**
 * Module for views components.
 * @module views
 */
/** Angular modules */
import angular from 'angular'

/** Comunity modules */

/** Submodules */
import vwAbout from './vw-about/vw-about'
import vwConfig from './vw-config/vw-config'
import vwHelp from './vw-help/vw-help'
import vwHome from './vw-home/vw-home'

/** Component & Directives */

/** Services */

// Constants
const moduleName = 'views'

// Variables

// Define module
angular
  .module(moduleName, [
    vwAbout,
    vwConfig,
    vwHelp,
    vwHome
  ])

/** @exports module name */
export default moduleName