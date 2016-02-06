/**
 * Directive to add functions to nmd-dialog component.
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

    /** Class Fields */
    this.restrict = 'A';

    /** Link function */
    this.link = (scope, el, attr, ctrl) => {
      let backdrop = el[0].querySelector('.dialog__back');
      let component = attr.ndComponent;
      
      // Insert component to dialog content
      if (component) {
        let newElement = `<${component} class="dialog__component whiteframe-5"></${component}>`;
        el.append($compile(newElement)(scope));
      }

      // Add click event to backdrop element to close dialog
      backdrop.addEventListener('click', () => {
        nmdDialog.close(component);
      });
      
      // Wait for the scope destruction 
      scope.$on('$destroy', () => {
        // remove component from DOM.
        // Insert a delay to elminate for CSS animation porpouses.
        el.addClass('dialog--close');
        $timeout(() => {
          el.remove();
          nmdDialog.toggleElements();
        }, 250);
      });
    };
  }

  /** Class Methods */

  /** Directive factory */
  static factory($compile, $timeout, nmdDialog) {
    DialogWatcher.instance = new DialogWatcher($compile, $timeout, nmdDialog);
    return DialogWatcher.instance;
  }
}

// Injection array for minification compatibility
DialogWatcher.factory.$inject = ['$compile', '$timeout', 'nmdDialog'];

/** @exports directive name and class */
export default {
  name: directiveName,
  directive: DialogWatcher.factory
};