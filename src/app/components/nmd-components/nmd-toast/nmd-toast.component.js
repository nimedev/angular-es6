/** nmd-toast component. */
// Template
import template from './nmd-toast.html!text';

// Controller
import controller from './nmd-toast.controller';

// Component object
let component = {
  controller,
  name: 'nmdToast',
  template
};

/** @exports component object */
export default component;