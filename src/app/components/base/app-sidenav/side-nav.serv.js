/**
 * Service to control app-sidenav visibility.
 * @name sideNav
 * @class SideNav
 * @param {Object} $state - to change ui-router state.
 * @param {Object} $window - to get initial size.
 */
// Service name
let serviceName = 'sideNav'; 

// Service class
class SideNav {
  /*@ngInject*/
  constructor($state, $window) {
    // Save dependencies
    this.$state = $state;
    this.$window = $window;

    /** Class Fields */
    this.cssName = 'nav-open';
    this.cssClass = '';
    this.smBreak = 600;
    this.mdBreak = 960;
  }

  /** Class Methods */
  /**
   * Change ui-router state
   * @param {string} state - state to redirect 
   */
  changeState(state) {
    this.$state.go(state);
      
    // check if close sidenav (mobile)
    if (this.$window.innerWidth < this.smBreak) {
      this.close();
    }
  }
    
  /** Close sidenav */
  close() {
    this.cssClass = '';
    this.toggleElements();
  }
    
  /** Open sidenav */
  open() {
    this.cssClass = this.cssName;
    this.toggleElements();
  }
    
  /** Change sidenav visibility */
  toggle() {
    if (this.cssClass === '') {
      this.open();
    } else {
      this.close();
    }
  }
    
  /** HELPER FUNCTIONS */
  /** toggle class in body and .app-body elements */
  toggleElements() {
    let body = angular.element(document).find('body');
    let element = angular.element(document.querySelector('.app-body'));
      
    // sidenav is closed?
    if (this.cssClass === '') {
      body.removeClass(this.cssName);
      element.removeClass(this.cssName);
    } else {
      body.addClass(this.cssName);
      element.addClass(this.cssName);
    }
  }
}

// Injection array for minification compatibility
let inject = ['$state', '$window', SideNav];

/** @exports injection array with service class */
export default {
  name: serviceName,
  service: inject
};