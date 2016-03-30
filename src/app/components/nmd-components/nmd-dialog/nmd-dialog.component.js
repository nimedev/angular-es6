/** nmd-dialog component. */
// Template
import template from './nmd-dialog.html!text'

// Controller
import controller from './nmd-dialog.controller'

// Component object
const component = {
  bindings: {
    /** {boolean} indicate if show close button */
    closeBtn: '<',
    
    /** name of the component */
    innerComponent: '@ndComponent'
  },
  controller,
  name: 'nmdDialog',
  template
}

/** @exports component object */
export default component