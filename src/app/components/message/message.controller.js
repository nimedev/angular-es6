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
    this.msg = 'Show message!';
  }

  /** Class Methods */
  /** Call close service to close 'message' component */
  close() {
    let toastOptions = {
      duration: 3000,
      button: {
        text: 'DISMISS',
        action: () => console.log(this.msg)
      }
    };
    this.nmdDialog.close('message');
    this.nmdToast.show('Message closed!', toastOptions);
  }
}

// Injection array for minification compatibility
let inject = ['nmdDialog', 'nmdToast', Message];

/** @exports injection array with controller class */
export default inject;