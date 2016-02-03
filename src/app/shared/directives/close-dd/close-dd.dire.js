/**
 * Directive to close dropdown menu when click in a sibbling element.
 * @name closeDd
 * @class CloseDd
 */
// Directive name
let directiveName = 'closeDd';

// Directive class
class CloseDd {
  /*@ngInject*/
  constructor() {
    // Save dependencies

    /** Class Fields */
    this.restrict = 'A';
  }

  /** Class Methods */

  link(scope, el, attr, ctrl) {
    let toggleButton = el.parent().find('input');
    
    // Change checked property to checkbox when click in element
    el.on('click', () => {
      toggleButton[0].checked = false;
    });
  }
}

// Injection array for minification compatibility
let inject = [() => new CloseDd()];

/** @exports injection array with directive class */
export default {
  name: directiveName,
  directive: inject
};