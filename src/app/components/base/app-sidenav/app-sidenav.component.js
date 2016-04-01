/**
 * app-sidenav component.
 * @name appSidenav 
 */

// Component name
const componentName = 'appSidenav'

// Template
import template from './app-sidenav.html!text'

// Controller
import controller from './app-sidenav.controller'

// Component object
const component = {
  controller,
  template
}

/** @exports component options */
export default {
  name: componentName,
  options: component
}