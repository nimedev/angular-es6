/**
 * Controller for app-fab component.
 * @class AppFabCtrl
 * @param {Object} nmdDialog - to open a dialog box.
 */
/** @exports Controller class */
export default class AppFabCtrl {
  /*@ngInject*/
  constructor(nmdDialog) {
    // Save dependencies
    this.nmdDialog = nmdDialog

    /** Class Fields */
  }

  /** Class Methods */
  /** Use service to open a dialog with message component */
  open() {
    this.nmdDialog.open('message')
  }
}

// Injection array for minification compatibility
AppFabCtrl.$inject = ['nmdDialog']