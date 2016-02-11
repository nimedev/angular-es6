/**
 * Directive to close sidenav when click in element.
 * @name closeSidenav
 * @class CloseSidenav
 * @param {Object} sideNav - get close service.
 */
// Directive name
let directiveName = 'closeSidenav';

// Directive class
class CloseSidenav {
  /*@ngInject*/
  constructor(sideNav) {
    // Save dependencies
    this.sideNav = sideNav;

    /** Class Fields */
    this.restrict = 'A';
    this.scope = {};
    
    /** Link function */
    this.link = (scope, el, attr, ctrl) => {
      el.on('click', () => {
        this.sideNav.safeClose();
      });
    };
  }

  /** Class Methods */

  /** Directive factory */
  static factory(sideNav) {
    CloseSidenav.instance = new CloseSidenav(sideNav);
    return CloseSidenav.instance;
  }
}

// Injection array for minification compatibility
CloseSidenav.factory.$inject = ['sideNav'];

/** @exports directive name and class */
export default {
  name: directiveName,
  directive: CloseSidenav.factory
};