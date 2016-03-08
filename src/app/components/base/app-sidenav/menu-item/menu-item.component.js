/** menu-item component. */
// Template
import template from './menu-item.html!text'

// Controller

// Component object
let component = {
  bindings: {
    icon: '@miIcon',
    state: '@miState',
    text: '@miText'
  },
  name: 'menuItem',
  template
}

/** @exports component object */
export default component