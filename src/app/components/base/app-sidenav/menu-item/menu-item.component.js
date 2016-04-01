/**
 * menu-item component.
 * @name menuItem
 */

// Component name
const componentName = 'menuItem'

// Template
import template from './menu-item.html!text'

// Controller

// Component object
const component = {
  bindings: {
    icon: '@miIcon',
    state: '@miState',
    text: '@miText'
  },
  template
}

/** @exports component options */
export default {
  name: componentName,
  options: component
}