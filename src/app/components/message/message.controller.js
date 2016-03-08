/**
 * Controller for message component.
 * @class MessageCtrl
 * @param {Object} nmdDialog - to get close service for dialog
 * @param {Object} nmdToast - to get open service for toast
 */
/** @exports Controller class */
export default class MessageCtrl {
  /*@ngInject*/
  constructor(nmdDialog, nmdToast) {
    // Save dependencies
    this.nmdDialog = nmdDialog
    this.nmdToast = nmdToast

    /** Class Fields */
    this.msg = 'Show message!'
  }

  /** Class Methods *w/
  /** Call close service to close 'message' component */
  close() {
    let toastOptions = {
      duration: 10000,
      button: {
        text: 'LOG',
        action: () => console.log(this.msg)
      }
    }
    this.nmdDialog.close('message')
    this.nmdToast.show('Message closed!', toastOptions)
  }
}

// Injection array for minification compatibility
MessageCtrl.$inject = ['nmdDialog', 'nmdToast']