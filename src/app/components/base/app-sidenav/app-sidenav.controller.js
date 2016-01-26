/**
 * Controller for app-sidenav component.
 * @class AppSideNavCtrl
 * @param {Object} $state - to change ui-router state.
 * @param {Object} $window - to get initial size.
 * @param {Object} sideNav - to control open/close of sidenav.
 */
class AppSideNavCtrl {
  /*@ngInject*/
  constructor($state, $window, sideNav) {
    // Inject array for minification compatibility
    this.$inject = ['$state', '$window', 'sideNav'];

    // Save dependencies
    this.$state = $state;
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
   * Change ui-router state
   * @param {string} state - state to redirect 
   */
  changeState(state) {
    this.$state.go(state);
      
    // check if close sidenav (mobile)
    if (this.$window.innerWidth < this.sideNav.smBreak) {
      this.sideNav.close();
    }
  }
    
  /** Toggle sidenav */
  toggle() {
    this.sideNav.toggle();
  }
}

/** @exports controller class */
export default AppSideNavCtrl;