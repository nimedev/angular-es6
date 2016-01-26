/**
 * Controller for app-header component
 * @class AppHeaderCtrl,
 * @param {Object} appHeader - to toggle app-header visibility.
 * @param {Object} sideNav - to toggle sidenav visibility.
 */
class AppHeaderCtrl {
  /*@ngInject*/
  constructor(appHeader) {
    // Inject array for minification compatibility
    this.$inject = ['appHeader'];

    // Save dependencies
    this.appHeader = appHeader;

    /** Class Fields */

  }

  /** Class Methods */
  /** Toggle header nav visibility */
  toggleHeaderNav() {
    this.appHeader.toggle();
  }
    
  /** Toggle sidenav visibility */
  toggleSidenav() {
    this.sideNav.toggle();
  }
}

/** @exports controller class */
export default AppHeaderCtrl;