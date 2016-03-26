/**
 * Module for base components.
 * @module base
 */
/** Angular modules */
import angular from 'angular'

/** Comunity modules */

/** Submodules */
import appFab from './app-fab/app-fab'
import appHeader from './app-header/app-header'
import appSidenav from './app-sidenav/app-sidenav'
import appWaiting from './app-waiting/app-waiting'
import comingSoon from './coming-soon/coming-soon'
import message from './message/message'

/** Component */

/** Services */

// Constants
const moduleName = 'base'

// Variables

// Define module
angular
  .module(moduleName, [
    appFab,
    appHeader,
    appSidenav,
    appWaiting,
    comingSoon,
    message
  ])

/** @exports module name */
export default moduleName