/**
 * Controller for app-header component
 * @class AppHeaderCtrl,
 * @param {Object} headerNav - to toggle navigation header visibility.
 * @param {Object} sideNav - to toggle sidenav visibility.
 */
// Controller class
class AppHeaderCtrl {
  /*@ngInject*/
  constructor(headerNav, sideNav) {
    // Save dependencies
    this.headerNav = headerNav;
    this.sideNav = sideNav;

    /** Class Fields */

  }

  /** Class Methods */
  /** Toggle header nav visibility */
  toggleHeaderNav() {
    this.headerNav.toggle();
  }
    
  /** Toggle sidenav visibility */
  toggleSidenav() {
    this.sideNav.toggle();
  }
}

// Injection array for minification compatibility
let inject = ['headerNav', 'sideNav', AppHeaderCtrl];

/** @exports injection array with controller class */
export default inject;