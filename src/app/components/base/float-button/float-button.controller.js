/**
 * Controller for float-button component.
 * @class FloatButtonCtrl
 * @param {Object} nmdDialog - to open a dialog box.
 */
/** @exports Controller class */
export default class FloatButtonCtrl {
  /*@ngInject*/
  constructor(nmdDialog) {
    // Save dependencies
    this.nmdDialog = nmdDialog;

    /** Class Fields */
  }

  /** Class Methods */
  /** Use service to open a dialog with message component */
  open() {
    this.nmdDialog.open('message');
  }
}

// Injection array for minification compatibility
FloatButtonCtrl.$inject = ['nmdDialog'];