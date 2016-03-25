/**
 * Controller for app-fab component.
 * @class AppFabCtrl
 * @param {Object} nmdDialog - to open a dialog box.
 */

/** @exports Controller class */
export default class AppFabCtrl {
  constructor(nmdDialog) {
    /** Dependencies */
    this.nmdDialog = nmdDialog

    /** Class Fields */
  }

  /** Use service to open a dialog with message component */
  open() {
    this.nmdDialog.open('message')
  }
}

// Injection array for minification compatibility
AppFabCtrl.$inject = ['nmdDialog']