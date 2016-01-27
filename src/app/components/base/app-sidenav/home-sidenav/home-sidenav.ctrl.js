/**
 * Controller for home-sidenav component.
 * @class HomeSidenavCtrl
 * @param {Object} sideNav - to change ui-router states.
 */
class HomeSidenavCtrl {
  /*@ngInject*/
  constructor(sideNav) {
    // Inject array for minification compatibility
    this.$inject = ['sideNav'];

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

/** @exports controller class */
export default HomeSidenavCtrl;