/** float-button component. */
// Template
import template from './float-button.tpl.html!text';

// Controller
import controller from './float-button.ctrl.js'; 

// Component object
let component = {
  controller,
  name: 'floatButton',
  template
};

/** @exports component object */
export default component;