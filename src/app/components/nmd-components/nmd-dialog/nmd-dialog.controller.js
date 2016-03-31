/**
 * Controller for nmd-dialog component.
 * @class NmdDialogCtrl
 * @param {Object} $rootScope - to catch state change event.
 * @param {Object} $window - to detect keyboard keys.
 * @param {Object} nmdDialog - to get close dialog service.
 */

/** @exports Controller class */
export default class NmdDialogCtrl {
  constructor($rootScope, $window, nmdDialog) {
    /** Dependencies */
    this.$rootScope = $rootScope
    this.$window = $window
    this.nmdDialog = nmdDialog

    /** Class Fields */
    // DOM element for this component
    this.componentName = 'nmd-dialog'
  }

  /** Initialization */
  $onInit() {
    // Add keydown event handler
    this.keydownHandler = event => {
      const keyCode = event.keyCode

      // If key pressed is cancel (27). close de dialog
      if (keyCode === 27) {
        event.preventDefault()
        this.close()
      }
    }

    // Add 'keydown' event to listen cancel key
    this.$window.addEventListener('keydown', this.keydownHandler)

    // Detect a posible change of route
    this.changeListener = this.$rootScope.$on('$locationChangeStart', event => {
      // Cancel de change of the route
      event.preventDefault()

      // Close the dialog
      this.close()
    })
  }

  /** When destroy element */
  $onDestroy() {
    // Remove 'keydown' event handler
    this.$window.removeEventListener('keydown', this.keydownHandler)

    // Unsuscribe $locationChangeStart listener
    this.changeListener()
  }

  /** Close dialog */
  close() {
    this.nmdDialog.close(this.innerComponent)
  }
}

// Injection array for minification compatibility
NmdDialogCtrl.$inject = ['$rootScope', '$window', 'nmdDialog']