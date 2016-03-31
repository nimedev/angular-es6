/**
 * Service to control nmd-toast component.
 * @name nmdToast
 * @class NmdToast
 * @param {Object} $compile - to compile new dialog directive.
 * @param {Object} $rootScope - to create new scope for compiled component.
 * @param {Object} $timeout - to generate delay to remove the element
 */
/** Angular modules */
import angular from 'angular'

// Service name
const serviceName = 'nmdToast'

// Service class
class NmdToast {
  constructor($compile, $rootScope, $timeout) {
    /** Dependencies */
    this.$compile = $compile
    this.$rootScope = $rootScope
    this.$timeout = $timeout

    /** Class Fields */
    // Default options for the toast
    this.setDefault()
  }

  /** Remove all open toast component. */
  close() {
    // last toast inserted
    const openToast = this.openToasts()

    // Remove object if find toast component
    if (openToast.length > 0) {
      // remove component from scope
      openToast.scope().$destroy()
    }
  }

  /** @return all open toasts elements */
  openToasts() {
    return angular.element(document.querySelectorAll('body>nmd-toast:not(.toast--close'))
  }

  /** 
   * Append a toast at end of body.
   * @param {String} msg - Text message of toast
   * @param {Object} options - options object:
   * {
   *   duration: 4000,      // Display time in milliseconds (0 to show permanently)
   *   button: {            // Action button (Don't show button if no provide it)
   *     text: 'DISMISS'    // Button text
   *     action: () => {}   // Callback function. If no action then close toast.
   *   }
   * }
   */
  show(msg, options) {
    let newToast = '<nmd-toast></nmd-toast>'
    let node = angular.element(document).find('body')
    let scope

    // Remove old toast
    this.close()

    // Set default values
    this.setDefault()

    // Verify custom message
    if (msg) {
      this.message = msg
    }

    // Verify options
    if (options) {
      // Add duration
      if (options.duration) {
        this.duration = options.duration
      }

      // Add button settings
      if (options.button) {
        this.button = options.button
      }
    }

    // Create new isolate scope
    scope = this.$rootScope.$new(true)

    // Compile dialog template and add to body
    node.append(this.$compile(newToast)(scope))
  }

  /**
   * Remove element from DOM.
   * @param {String} component - Used to select the dialog to remove.
   */
  remove() {
    const openToast = this.openToasts()

    // Add class for CSS animation
    openToast.addClass('toast--close')

    // Insert a delay to eliminate for CSS animation porpouses
    // and remove component from DOM.
    this.$timeout(() => openToast.remove(), 1000)
  }

  /** HELPER FUNCTIONS */
  /** Set default values for toast */
  setDefault() {
    this.message = ''
    this.duration = 4000
    this.button = {}
  }
}

// Injection array for minification compatibility
NmdToast.$inject = ['$compile', '$rootScope', '$timeout']

/** @exports service name and class */
export default {
  name: serviceName,
  service: NmdToast
}