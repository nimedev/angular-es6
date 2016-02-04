/**
 * Directive to add function to nmd-dialog component.
 * @name dialogWatcher
 * @class DialogWatcher
 * @param {Object} $compile - to compile dialog content component.
 * @param {Object} nmdDialog - get close service.
 */
// Directive name
let directiveName = 'dialogWatcher';

// Directive class
class DialogWatcher {
  /*@ngInject*/
  constructor($compile, nmdDialog) {
    // Save dependencies
    this.$compile = $compile;
    this.nmdDialog = nmdDialog;

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
    };
  }

  /** Class Methods */
}

// Injection array for minification compatibility
let inject = ['$compile', 'nmdDialog', ($compile, nmdDialog) => new DialogWatcher($compile, nmdDialog)];

/** @exports injection array with directive class */
export default {
  name: directiveName,
  directive: inject
};