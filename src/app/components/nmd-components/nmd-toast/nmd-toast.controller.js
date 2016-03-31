/**
 * Controller for nmd-toast component.
 * @class NmdToastCtrl
 * @param {Object} $rootScope - to generate shown and hide events.
 * @param {Object} $timeout - to create toast delay.
 * @param {Object} nmdToast - to get toast services.
 */

/** @exports Controller class */
export default class NmdToastCtrl {
  constructor($rootScope, $timeout, nmdToast) {
    /** Dependencies */
    this.$rootScope = $rootScope
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

    // Generate 'toastShown' event
    this.$timeout(() => this.$rootScope.$emit('toastShown'), 50)

    // Start close timmer
    this.timmer = this.$timeout(() => this.nmdToast.close(), this.nmdToast.duration)
  }

  /** When component is destroyed */
  $onDestroy() {
    // Cancel toast timmer
    this.$timeout.cancel(this.timmer)

    // Generate 'toastHide' event
    this.$rootScope.$emit('toastHide')
  }

  /** Call close toast service */
  close() {
    this.nmdToast.close()
  }
}

// Injection array for minification compatibility
NmdToastCtrl.$inject = ['$rootScope', '$timeout', 'nmdToast']