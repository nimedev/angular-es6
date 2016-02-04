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
  
  /** Close sidenav only in mobile */
  safeClose() {
    if (this.$window.innerWidth < this.smBreak) {
      this.close();
    }
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
      element.removeClass(this.cssName);
      body.removeClass(this.cssName);
    } else {
      element.addClass(this.cssName);
      
      // only add class if is in mobile
      if (this.$window.innerWidth < this.smBreak) {
        body.addClass(this.cssName);
      }
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