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
    // Save dependencies
    this.$timeout = $timeout;
    this.nmdToast = nmdToast;

    /** Class Fields */
    this.message = nmdToast.message;
    
    // Start $timeout to close modal
    if (nmdToast.duration) {
      $timeout(nmdToast.close, nmdToast.duration);
    }
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