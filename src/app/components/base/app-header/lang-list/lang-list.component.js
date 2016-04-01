/**
 * lang-list component.
 * @name langList
 */

// Component name
const componentName = 'langList'

// Template
import template from './lang-list.html!text'

// Controller
import controller from './lang-list.controller'

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