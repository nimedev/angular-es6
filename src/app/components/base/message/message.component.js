/** 
 * message component. 
 * @name message
 */

// Component name
const componentName = 'message'

// Template
import template from './message.html!text'

// Controller
import controller from './message.controller'

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