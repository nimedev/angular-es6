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
  changeState() {
    this.sideNav.changeState();
  }
}

/** @exports controller class */
export default HomeSidenavCtrl;