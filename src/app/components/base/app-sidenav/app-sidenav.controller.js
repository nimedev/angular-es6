/**
 * Controller for app-sidenav component.
 * @class AppSidenavCtrl
 * @param {Object} $window - to get initial size.
 * @param {Object} headerNav - to get header navigation status.
 * @param {Object} sideNav - to control open/close of sidenav.
 */

/** @exports Controller class */
export default class AppSidenavCtrl {
  constructor($window, headerNav, sideNav) {
    /** Dependencies */
    this.$window = $window
    this.headerNav = headerNav
    this.sideNav = sideNav

    /** Class Fields */
  }

  /** Initialization */
  $onInit() {
    // Open sidenav for large screens
    if (this.$window.innerWidth >= this.sideNav.mdBreak) {
      this.sideNav.open()
    }
  }

  /**
   * Call close sidenav service.
   * Use when can't use close-sidenav directive.
   */
  close() {
    this.sideNav.close()
  }
}

// Injection array for minification compatibility
AppSidenavCtrl.$inject = ['$window', 'headerNav', 'sideNav']