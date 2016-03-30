/**
 * Service used to add nmd-dialog component in document body.
 * @name nmdDialog
 * @class NmdDialog
 * @param {Object} $compile - add dialog component to angular digest cycle
 * @param {Object} $rootScope - to create new scope for new component
 * @param {Object} $timeout - to generate delay for destroy element from DOM
 */
/** Angular modules */
import angular from 'angular'

// Service name
const serviceName = 'nmdDialog'

// Service class
class NmdDialog {
  constructor($compile, $rootScope, $timeout) {
    /** Dependencies */
    this.$compile = $compile
    this.$rootScope = $rootScope
    this.$timeout = $timeout

    /** Class Fields */
    this.cssName = 'dialog--open'
  }

  /** 
   * Remove a dialog component acording to nd-component attribute.
   * @param {String} component - Used to select the dialog to remove.
   */
  close(component) {
    const dialog = angular.element(document.querySelector(`nmd-dialog[nd-component=${component}]`))

    // remove component from scope
    dialog.scope().$destroy()
  }

  /** 
   * Append a dialog at end of body and insert a component inside it.
   * @param {String} component - Name of component to insert in HTML format
   *  (component-name)
   * @param {Object} options - Object with option for dialog
      options = {
        closeBtn = false
      }
   */
  open(component, options = { closeBtn: false }) {
    let node = angular.element(document).find('body')
    let newDialog = `<nmd-dialog nd-component="${component}" close-btn="${options.closeBtn}" dialog-watcher></nmd-dialog>`
    let oldDialog = document.querySelector(`nmd-dialog[nd-component=${component}]`)
    let scope

    // Create new dialog if is no there a dialog with de same nd-component attribute
    if (!oldDialog) {
      // Create new isolate scope
      scope = this.$rootScope.$new(true)

      // Compile dialog template and add to body
      node.append(this.$compile(newDialog)(scope))

      this.toggleElements(true)
    }
  }

  /**
   * Remove element from DOM and check if remove dialog classes.
   * @param {String} component - Used to select the dialog to remove.
   */
  remove(component) {
    const dialog = angular.element(document.querySelector(`nmd-dialog[nd-component=${component}]`))

    // Add class for CSS close animation.
    dialog.addClass('dialog--close')

    // Insert a delay to eliminate for CSS animation porpouses.
    this.$timeout(() => {
      // Remove element from DOM
      dialog.remove()

      // Check if remove CSS classes related to dialog.
      this.toggleElements()
    }, 1000)
  }

  /** HELPER FUNCTION */
  /** 
   * Toggle class that indicate open dialog in body element
   * @param {Boolean} open - Indicate if open o close dialog. 
   */
  toggleElements(open) {
    let body = angular.element(document).find('body')
    let oldDialog = angular.element(document).find('nmd-dialog')

    // open dialog?
    if (open) {
      body.addClass(this.cssName)
    } else if (oldDialog.length < 1) {
      // remove class if is only 1 open dialogs?
      body.removeClass(this.cssName)
    }
  }
}

// Injection array for minification compatibility
NmdDialog.$inject = ['$compile', '$rootScope', '$timeout']

/** @exports service name and class */
export default {
  name: serviceName,
  service: NmdDialog
}