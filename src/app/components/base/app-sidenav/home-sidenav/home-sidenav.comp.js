/** home-sidenav component. */
// Template
import template from './home-sidenav.tpl.html!text';

// Controller
import controller from './home-sidenav.ctrl';

// Component object
let component = {
  controller,
  name: 'homeSidenav',
  template
};

/** @exports component object */
export default component;