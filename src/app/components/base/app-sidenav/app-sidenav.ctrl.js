/**
 * Controller for app-sidenav component.
 * @class AppSideNavCtrl
 * @param {Object} $window - to get initial size.
 * @param {Object} sideNav - to control open/close of sidenav.
 */
// Controller class
class AppSideNavCtrl {
  /*@ngInject*/
  constructor($window, sideNav) {
    // Save dependencies
    this.$window = $window;
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
let inject = ['$window', 'sideNav', AppSideNavCtrl];

/** @exports injection array with controller class */
export default inject;