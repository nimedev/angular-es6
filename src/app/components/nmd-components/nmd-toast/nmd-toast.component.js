/** 
 * nmd-toast component. 
 * @name nmdToast
 */

// Component name
const componentName = 'nmdToast'

// Template
import template from './nmd-toast.html!text'

// Controller
import controller from './nmd-toast.controller'

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