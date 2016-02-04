/** float-button component. */
// Template
import template from './float-button.html!text';

// Controller
import controller from './float-button.controller.js'; 

// Component object
let component = {
  controller,
  name: 'floatButton',
  template
};

/** @exports component object */
export default component;