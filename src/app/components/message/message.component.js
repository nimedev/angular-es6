/** message component. */
// Template
import template from './message.html!text'

// Controller
import controller from './message.controller'

// Component object
let component = {
  controller,
  name: 'message',
  template
}

/** @exports component object */
export default component