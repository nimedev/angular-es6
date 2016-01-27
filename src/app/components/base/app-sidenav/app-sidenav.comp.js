/** app-sidenav component. */
// Template
import template from './app-sidenav.tpl.html!text';

// Controller
import controller from './app-sidenav.ctrl';

// Component object
let component = {
  controller,
  name: 'appSidenav',
  template
};

/** @exports component object */
export default component;