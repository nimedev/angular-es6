/**
 * Controller for config-sidenav component.
 * @class confingSidenav
 * @param {Object} sideNav - ...
 */
class confingSidenav {
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
export default confingSidenav;