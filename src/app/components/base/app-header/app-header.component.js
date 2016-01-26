/** app-header component. */
// Template
import template from './app-header.tpl.html!text';

// Controller
import controller from './app-header.controller';

// Component object
let component = {
  controller,
  name: 'appHeader',
  template
};

/** @exports component object */
export default component;