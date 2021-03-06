/**
 * Module for all route components and related services.
 * Is the root component for all route components.
 * @module route
 */
/** Angular modules */
import angular from 'angular'

/** Comunity modules */
import uiRouter from 'angular-ui-router'

/** Submodules */
import rcAbout from './rc-about/rc-about'
import rcConfig from './rc-config/rc-config'
import rcHelp from './rc-help/rc-help'
import rcHome from './rc-home/rc-home'

/** Component & Directives */
import component from './route.component'

/** Services */

/** Other modules */
import routeConfig from './route.config'

// Constants
const moduleName = 'route'

// Variables

// Define module
angular
  .module(moduleName, [
    uiRouter,
    rcAbout,
    rcConfig,
    rcHelp,
    rcHome
  ])
  .config(routeConfig)
  .component(component.name, component.options)

/** @exports module name */
export default moduleName