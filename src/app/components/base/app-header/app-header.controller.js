/**
 * Controller for app-header component.
 * @class AppHeaderCtrl
 * @param {Object} headerNav - to toggle navigation header visibility.
 * @param {Object} sideNav - to toggle sidenav visibility.
 */
/** @exports Controller class */
export default class AppHeaderCtrl {
  /*@ngInject*/
  constructor(headerNav, sideNav) {
    // Save dependencies
    this.headerNav = headerNav
    this.sideNav = sideNav

    /** Class Fields */
  }

  /** Class Methods */
  /** Toggle header nav visibility */
  toggleHeaderNav() {
    this.headerNav.toggle()
  }

  /** Toggle sidenav visibility */
  toggleSidenav() {
    this.sideNav.toggle()
  }
}

// Injection array for minification compatibility
AppHeaderCtrl.$inject = ['headerNav', 'sideNav']