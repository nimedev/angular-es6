/**
 * Directive to add functions to nmd-dialog component.
 * @name dialogWatcher
 * @param {Object} $compile - to compile dialog content component.
 * @param {Object} $timeout - to generate delay for destroy element from DOM
 * @param {Object} $window - to listen cancel key.
 * @param {Object} nmdDialog - get close service.
 */
// Directive name
const directiveName = 'dialogWatcher'

// Directive Function
const directive = ($compile, $timeout, $window, nmdDialog) => {
  let directive = {
    link: link,
    restrict: 'A'
  }
  return directive

  /////////////////
  /** Link function */
  function link(scope, element, attrs) {
    let backdrop = element[0].querySelector('.dialog__back')
    let component = attrs.ndComponent

    // Insert component to dialog content
    if (component) {
      let newElement = `<${component} class="dialog__component whiteframe-5"></${component}>`
      element.append($compile(newElement)(scope))
    }

    // Add click event to backdrop element to close dialog
    backdrop.addEventListener('click', () => nmdDialog.close(component))

    // Add 'keydown' event to listen cancel key
    $window.addEventListener('keydown', checkKeyPressed)

    // Add 'hashchange' event to close the dialog if url change
    $window.addEventListener('hashchange', hashChanged)

    // Wait for the scope destruction 
    scope.$on('$destroy', () => {
      // remove component from DOM.
      element.addClass('dialog--close')

      // Remove events
      $window.removeEventListener('keydown', checkKeyPressed)
      $window.removeEventListener('hashchange', hashChanged)

      // Insert a delay to elminate for CSS animation porpouses.
      $timeout(() => {
        element.remove()
        nmdDialog.toggleElements()
      }, 1000)
    })

    /** FUNCTIONS FOR EVENTS */
    /**
     * Check key pressed. Put inside link function for scope issues
     * @memberOf link
     * @param {Object} event - event for 'keydown' event
     */
    function checkKeyPressed(event) {
      const keyCode = event.keyCode

      // If key pressed is cancel (27). close de dialog
      if (keyCode === 27) {
        event.preventDefault()
        nmdDialog.close(component)
      }
    }

    /**
     * Handle 'hashchange' event
     * @memberOf link
     */
    function hashChanged() {
      nmdDialog.close(component)
    }
  }
}

// Injection array for minification compatibility
directive.$inject = ['$compile', '$timeout', '$window', 'nmdDialog']

/** @exports directive name and class */
export default {
  name: directiveName,
  directive: directive
}