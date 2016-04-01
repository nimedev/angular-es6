/** 
 * app-fab component.
 * @name appFab
 */

// Component name
const componentName = 'appFab'

// Template
import template from './app-fab.html!text'

// Controller
import controller from './app-fab.controller.js'

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