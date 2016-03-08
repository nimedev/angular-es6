/**
 * Directive to add functions to nmd-dialog component.
 * @name dialogWatcher
 * @param {Object} $compile - to compile dialog content component.
 * @param {Object} $timeout - to generate delay for destroy element from DOM
 * @param {Object} nmdDialog - get close service.
 */
// Directive name
const directiveName = 'dialogWatcher'

// Directive Function
const directive = ($compile, $timeout, nmdDialog) => {
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
      
    // Wait for the scope destruction 
    scope.$on('$destroy', () => {
      // remove component from DOM.
      // Insert a delay to elminate for CSS animation porpouses.
      element.addClass('dialog--close')
      $timeout(() => {
        element.remove()
        nmdDialog.toggleElements()
      }, 250)
    })
  }
}

// Injection array for minification compatibility
directive.$inject = ['$compile', '$timeout', 'nmdDialog']

/** @exports directive name and class */
export default {
  name: directiveName,
  directive: directive
}