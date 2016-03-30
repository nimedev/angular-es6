/**
 * Directive to add functions to nmd-dialog component.
 * The dialog is closed if press cancel key or history back.
 * @name dialogWatcher
 * @param {Object} $compile - to compile dialog content component.
 */
// Directive name
const directiveName = 'dialogWatcher'

// Directive Function
const directive = ($compile) => {
  let directive = {
    link: link,
    restrict: 'A'
  }
  return directive

  /////////////////
  /** Link function */
  function link(scope, element, attrs) {
    let component = attrs.ndComponent

    // Insert component to dialog content
    if (component) {
      let newElement = `<${component} class="dialog__component whiteframe-5"></${component}>`
      element.append($compile(newElement)(scope))
    }
  }
}

// Injection array for minification compatibility
directive.$inject = ['$compile']

/** @exports directive name and class */
export default {
  name: directiveName,
  directive: directive
}