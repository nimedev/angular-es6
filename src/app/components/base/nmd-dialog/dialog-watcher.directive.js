/**
 * Directive to add function to nmd-dialog component.
 * @name dialogWatcher
 * @class DialogWatcher
 * @param {Object} $compile - to compile dialog content component.
 * @param {Object} $timeout - to generate delay for destroy element from DOM
 * @param {Object} nmdDialog - get close service.
 */
// Directive name
let directiveName = 'dialogWatcher';

// Directive class
class DialogWatcher {
  /*@ngInject*/
  constructor($compile, $timeout, nmdDialog) {
    // Save dependencies
    this.$compile = $compile;
    this.nmdDialog = nmdDialog;
    this.$timeout = $timeout;

    /** Class Fields */
    this.restrict = 'A';

    /** link function */
    this.link = (scope, el, attr, ctrl) => {
      let backdrop = el[0].querySelector('.dialog__back');
      let component = attr.ndComponent;
      
      // Insert component to dialog content
      if (component) {
        let newElement = `<${component} class="dialog__component whiteframe-5"></${component}>`;
        el.append(this.$compile(newElement)(scope));
      }

      // Add click event to backdrop element to close dialog
      backdrop.addEventListener('click', () => {
        this.nmdDialog.close(component);
      });
      
      // Wait for the scope destruction 
      scope.$on('$destroy', () => {
        // remove component from DOM.
        // Insert a delay to elminate for CSS animation porpouses.
        el.addClass('dialog--close');
        this.$timeout(() => {
          el.remove();
          this.nmdDialog.toggleElements();
        }, 400);
      });
    };
  }

  /** Class Methods */
}

// Injection array for minification compatibility
let inject = ['$compile', '$timeout', 'nmdDialog', ($compile, $timeout, nmdDialog) => new DialogWatcher($compile, $timeout, nmdDialog)];

/** @exports injection array with directive class */
export default {
  name: directiveName,
  directive: inject
};