/**
 * Controller for app-main component.
 * @class AppMain
 * @param {Object} headerNav - to detect when open head navigation.
 * @param {Object} sideNav - to detect when open sidenav.
 */
/** @exports Controller class */
export default class AppMain {
  /*@ngInject*/
  constructor(headerNav, sideNav) {
    // Save dependencies
    this.headerNav = headerNav;
    this.sideNav = sideNav;

    /** Class Fields */

  }

  /** Class Methods */
}

// Injection array for minification compatibility
AppMain.$inject = ['headerNav', 'sideNav'];