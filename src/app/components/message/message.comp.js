/** message component. */
// Template
import template from './message.tpl.html!text';

// Controller
import controller from './message.ctrl.js';

// Component object
let component = {
  controller,
  name: 'message',
  template
};

/** @exports component object */
export default component;