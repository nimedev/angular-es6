/**
 * Controller for nmd-toast component.
 * @class NmdToastCtrl
 * @param {Object} $timeout - to create toast delay.
 * @param {Object} nmdToast - to get toast services.
 */

/** @exports Controller class */
export default class NmdToastCtrl {
  constructor($timeout, nmdToast) {
    /** Dependencies */
    this.$timeout = $timeout
    this.nmdToast = nmdToast

    /** Class Fields */
    this.btnAction = nmdToast.close
    this.btnText = ''
    this.message = nmdToast.message
    this.timmer
  }

  /** Initialization */
  $onInit() {
    let button = this.nmdToast.button

    // Prepare action button
    if (button.text) {
      this.btnText = button.text
    }

    if (button.action) {
      this.btnAction = button.action
    }

    // Start close timmer
    this.timmer = this.$timeout(this.nmdToast.close, this.nmdToast.duration)
  }

  /** Call close toast service */
  close() {
    this.nmdToast.close()
  }
}

// Injection array for minification compatibility
NmdToastCtrl.$inject = ['$timeout', 'nmdToast']