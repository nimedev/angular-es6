/**
 * Controller for message component.
 * @class Message
 * @param {Object} nmdDialog - to get close service for dialog
 * @param {Object} nmdToast - to get open service for toast 
 */
// Controller class
class Message {
  /*@ngInject*/
  constructor(nmdDialog, nmdToast) {
    // Save dependencies
    this.nmdDialog = nmdDialog;
    this.nmdToast = nmdToast;

    /** Class Fields */
  }

  /** Class Methods */
  /** Call close service to close 'message' component */
  close() {
    this.nmdDialog.close('message');
    this.nmdToast.open();
  }
}

// Injection array for minification compatibility
let inject = ['nmdDialog', 'nmdToast', Message];

/** @exports injection array with controller class */
export default inject;