/** config-sidenav component. */
// Template
import template from './config-sidenav.tpl.html!text';

// Controller
import controller from './config-sidenav.ctrl';

// Component object
let component = {
  controller,
  name: 'configSidenav',
  template
};

/** @exports component object */
export default component;