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
    
    /** link function */
    this.link = (scope, el, attr, ctrl) => {
      el.on('click', () => {
        this.sideNav.safeClose();
      });
    };
  }

  /** Class Methods */

  /*link(scope, el, attr, ctrl) {
    console.log(this)

    el.on('click', () => {
      scope.sideNav.changeState();
    });
  }*/
}

// Injection array for minification compatibility
let inject = ['sideNav', (sideNav) => new CloseSidenav(sideNav)];

/** @exports injection array with directive class */
export default {
  name: directiveName,
  directive: inject
};