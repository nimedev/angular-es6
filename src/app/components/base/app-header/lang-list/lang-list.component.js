/** lang-list component. */
// Template
import template from './lang-list.tpl.html!text';

// Controller
import controller from './lang-list.controller';

// Component object
let component = {
  controller,
  name: 'langList',
  template
};

/** @exports component object */
export default component;