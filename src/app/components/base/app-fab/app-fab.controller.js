/**
 * Controller for app-fab component.
 * @class AppFabCtrl
 * @param {Object} $rootScope - to catch toast events.
 * @param {Object} nmdDialog - to open a dialog box.
 * @param {Object} nmdToast - to get open toast elements.
 * @param {Object} styles - to get CSS properties.
 */

/** @exports Controller class */
export default class AppFabCtrl {
  constructor($rootScope, nmdDialog, nmdToast, styles) {
    /** Dependencies */
    this.$rootScope = $rootScope
    this.nmdDialog = nmdDialog
    this.nmdToast = nmdToast
    this.styles = styles

    /** Class Fields */
  }

  /** Initialization */
  $onInit() {
    // Listener when toast is shown
    this.showListener = this.$rootScope.$on('toastShown', () => {
      // Component element
      const component = document.querySelector('app-fab > button')

      // Select open toasts
      const toasts = this.nmdToast.openToasts()[0]

      // Styles variables
      let fontSize = this.styles.getRootFontSize()
      let bottom = toasts.clientHeight / fontSize + 1

      // Move Element from bottom.
      component.style.bottom = bottom + 'rem'
    })

    // Listener when toast is start hide
    this.hideLister = this.$rootScope.$on('toastHide', () => {
      // Component element
      const component = document.querySelector('app-fab > button')

      // Move Element to original position.
      component.style['bottom'] = ''
    })
  }

  /** When component is destroyed */
  $onDestroy() {
    // Remove component listeners
    this.showListener()
    this.hideLister()
  }

  /** Use service to open a dialog with message component */
  open() {
    this.nmdDialog.open('message')
  }
}

// Injection array for minification compatibility
AppFabCtrl.$inject = ['$rootScope', 'nmdDialog', 'nmdToast', 'styles']