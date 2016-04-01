/**
 * Directive used to create nmd-dialog component.
 * Use this instead component to add component template to directive template.
 * @name nmdDialog
 */
// Template
import template from './nmd-dialog.html!text'

// Controller
import controller from './nmd-dialog.controller'

// Directive name
const directiveName = 'nmdDialog'

// Directive Function
const directive = () => {
  let directive = {
    bindToController: true,
    controller,
    controllerAs: '$ctrl',
    restrict: 'E',
    scope: {
      /** {boolean} indicate if show close button */
      closeBtn: '<',

      /** name of the component */
      innerComponent: '@ndComponent'
    },

    // Add component template snippet to directive template
    template: function(tElement, tAttrs) {
      return `${template}<${tAttrs.ndComponent} class="dialog__component whiteframe-5"></${tAttrs.ndComponent}>`
    }
  }
  return directive
}

// Injection array for minification compatibility
directive.$inject = []

/** @exports directive name and function */
export default {
  name: directiveName,
  factory: directive
}