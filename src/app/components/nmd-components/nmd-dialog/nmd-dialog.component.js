/** nmd-dialog component. */
// Template
import template from './nmd-dialog.html!text'

// Controller

// Component object
const component = {
  bindings: {
    /** {boolean} indicate if show close button */
    closeBtn: '<'
  },
  name: 'nmdDialog',
  template
}

/** @exports component object */
export default component