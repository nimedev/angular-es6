/**
 * Directive to add function to nmd-dialog component.
 * @name dialogWatcher
 * @class DialogWatcher
 * @param {Object} $compile - ...
 */
// Directive name
let directiveName = 'dialogWatcher';

// Directive class
class DialogWatcher {
  /*@ngInject*/
  constructor($compile) {
    // Save dependencies
    this.$compile = $compile;

    /** Class Fields */
    this.restrict = 'A';
    // this.scope =  {};

    /** link function */
    this.link = (scope, el, attr, ctrl) => {
      let backdrop = el[0].querySelector('.dialog__back');
      let content = el[0].querySelector('.dialog__content');
      let component = attr.ndComponent;
      
      // Insert component to dialog content
      if (component) {
        let newElement = `<${component}></${component}>`;
        angular.element(content).append(this.$compile(newElement)(scope));
      }

      // Add click event to backdrop element to close dialog
      backdrop.addEventListener('click', () => {
        console.log('click!!!')
      });
    };
  }

  /** Class Methods */
}

// Injection array for minification compatibility
let inject = ['$compile', ($compile) => new DialogWatcher($compile)];

/** @exports injection array with directive class */
export default {
  name: directiveName,
  directive: inject
};