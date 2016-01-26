/** app-sidenav component. */
// Template
import template from './app-sidenav.tpl.html!text';

// Controller
import controller from './app-sidenav.controller';

// Component object
let component = {
  controller,
  name: 'appSidenav',
  template
};

/** @exports component object */
export default component;