/**
 * Controller for config-sidenav component.
 * @class confingSidenav
 * @param {Object} sideNav - ...
 */
// Controller class
class ConfingSidenavCtlr {
  /*@ngInject*/
  constructor(sideNav) {
    // Save dependencies
    this.sideNav = sideNav;

    /** Class Fields */
  }

  /** Class Methods */
  /**
   * Change state
   * @param {string} state - state to redirect
   */
  changeState(state) {
    this.sideNav.changeState(state);
  }
}

// Injection array for minification compatibility
let inject = ['sideNav', ConfingSidenavCtlr];

/** @exports injection array with controller class */
export default inject;