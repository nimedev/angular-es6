/**
 * Controller for float-button component.
 * @class FloatButton
 * @param {Object} nmdDialog - to open a dialog box.
 */
// Controller class
class FloatButton {
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
let inject = ['nmdDialog', FloatButton];

/** @exports injection array with controller class */
export default inject;