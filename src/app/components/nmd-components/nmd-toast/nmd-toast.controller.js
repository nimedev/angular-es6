/**
 * Controller for nmd-toast component.
 * @class NmdToastCtrl
 * @param {Object} $timeout - to create toast delay.
 * @param {Object} nmdToast - to get toast services.
 */
/** @exports Controller class */
export default class NmdToastCtrl {
  /*@ngInject*/
  constructor($timeout, nmdToast) {
    let button = nmdToast.button
    
    // Save dependencies
    this.$timeout = $timeout
    this.nmdToast = nmdToast

    /** Class Fields */
    this.btnAction = nmdToast.close
    this.btnText = ''
    this.message = nmdToast.message
    this.timmer = $timeout(nmdToast.close, nmdToast.duration)
    
    // Prepare action button
    if (button.text) {
      this.btnText = button.text
    }
    
    if (button.action) {
      this.btnAction = button.action
    }
  }

  /** Class Methods */
  /** Call close toast service */
  close() {
    this.nmdToast.close()
  }
}

// Injection array for minification compatibility
NmdToastCtrl.$inject = ['$timeout', 'nmdToast']