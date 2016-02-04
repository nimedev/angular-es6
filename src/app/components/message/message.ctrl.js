/**
 * Controller for message component.
 * @class Message
 * @param {Object} nmdDialog - ...
 */
// Controller class
class Message {
  /*@ngInject*/
  constructor(nmdDialog) {
    // Save dependencies
    this.nmdDialog = nmdDialog;

    /** Class Fields */
  }

  /** Class Methods */
  /** Call close service to close 'message' component */
  close() {
    this.nmdDialog.close('message');
  }
}

// Injection array for minification compatibility
let inject = ['nmdDialog', Message];

/** @exports injection array with controller class */
export default inject;