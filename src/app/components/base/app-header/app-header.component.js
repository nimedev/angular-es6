/**
 * app-header component.
 * @name appHeader
 */

// Component name
const componentName = 'appHeader'

// Template
import template from './app-header.html!text'

// Controller
import controller from './app-header.controller'

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