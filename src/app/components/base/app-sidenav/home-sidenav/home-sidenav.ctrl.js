/**
 * Controller for home-sidenav component.
 * @class HomeSidenavCtrl
 * @param {Object} sideNav - to change ui-router states.
 */
// Controller class
class HomeSidenavCtrl {
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
let inject = ['sideNav', HomeSidenavCtrl];

/** @exports injection array with controller class */
export default inject;