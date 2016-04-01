/** 
 * coming-soon component. 
 * @name comingSoon 
 */

// Component name
const componentName = 'comingSoon'

// Template
import template from './coming-soon.html!text'

// Controller

// Component object
const component = {
  bindings: {
    title: '@'
  },
  template
}

/** @exports component options */
export default {
  name: componentName,
  options: component
}