/** coming-soon component. */
// Template
import template from './coming-soon.html!text';

// Controller

// Component object
let component = {
  bindings: {
    title: '@'
  },
  name: 'comingSoon',
  template
};

/** @exports component object */
export default component;