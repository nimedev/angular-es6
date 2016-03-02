/**
 * Controller for app-sidenav component.
 * @class AppSidenavCtrl
 * @param {Object} $window - to get initial size.
 * @param {Object} headerNav - to get header navigation status.
 * @param {Object} sideNav - to control open/close of sidenav.
 */
/** @exports Controller class */
export default class AppSidenavCtrl {
  /*@ngInject*/
  constructor($window, headerNav, sideNav) {
    // Save dependencies
    this.$window = $window;
    this.headerNav = headerNav;
    this.sideNav = sideNav;

    /** Class Fields */
    
    /** Initializations */
    // Open sidenav for large screens
    if ($window.innerWidth >= sideNav.mdBreak) {
      sideNav.open();
    }
  }

  /** Class Methods */
  /**
   * Call close sidenav service.
   * Use when can't use close-sidenav directive.
   */
  close() {
    this.sideNav.close();
  }
}

// Injection array for minification compatibility
AppSidenavCtrl.$inject = ['$window', 'headerNav', 'sideNav'];