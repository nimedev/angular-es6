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
    
    /** Link function */
    this.link = (scope, el, attr, ctrl) => {
      let toggleButton = el.parent().find('input');
      
      // Change checked property to checkbox when click in element
      el.on('click', () => {
        toggleButton[0].checked = false;
      });
    };
  }

  /** Class Methods */
  
  /** Directive factory */
  static factory() {
    CloseDd.instance = new CloseDd();
    return CloseDd.instance;
  }
}

// Injection array for minification compatibility
CloseDd.factory.$inject = [];

/** @exports directive name and class */
export default {
  name: directiveName,
  directive: CloseDd.factory
};