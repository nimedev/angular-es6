/**
 * Controller for nmd-toast component.
 * @class NmdToastCtrl
 * @param {Object} $timeout - to create toast delay.
 * @param {Object} nmdToast - to get toast services.
 */
// Controller class
class NmdToastCtrl {
  /*@ngInject*/
  constructor($timeout, nmdToast) {
    let button = nmdToast.button;
    
    // Save dependencies
    this.$timeout = $timeout;
    this.nmdToast = nmdToast;

    /** Class Fields */
    this.btnAction = nmdToast.close;
    this.btnText = '';
    this.message = nmdToast.message;
    this.timmer;
    
    // Prepare action button
    if (button.text) {
      this.btnText = button.text;
    }
    
    if (button.action) {
      this.btnAction = button.action;
    }
    
    // Start $timeout to close modal
    this.timmer = $timeout(nmdToast.close, nmdToast.duration);
  }

  /** Class Methods */
  close() {
    this.nmdToast.close();
  }
}

// Injection array for minification compatibility
let inject = ['$timeout', 'nmdToast', NmdToastCtrl];

/** @exports injection array with controller class */
export default inject;