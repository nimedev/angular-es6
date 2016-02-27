/** app-fab component. */
// Template
import template from './app-fab.html!text';

// Controller
import controller from './app-fab.controller.js'; 

// Component object
let component = {
  controller,
  name: 'appFab',
  template
};

/** @exports component object */
export default component;