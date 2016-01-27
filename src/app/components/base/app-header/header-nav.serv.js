/**
 * Service to control header visibility.
 * @class headerNav
 */
// Service name
let serviceName = 'headerNav'; 

// Service class
class headerNav {
  /*@ngInject*/
  constructor() {
    // Save dependencies

    /** Class Fields */
    this.cssName = 'header__nav-open';
    this.cssClass = '';
  }

  /** Class Methods */
  /** Close header-nav */
  close() {
    this.cssClass = '';
    this.toggleElements();
  }
    
  /** Open header-nav */
  open() {
    this.cssClass = this.cssName;
    this.toggleElements();
  }
    
  /** Change header-nav visibility */
  toggle() {
    if (this.cssClass === '') {
      this.open();
    } else {
      this.close();
    }
  }
    
  /** HELPER FUNCTIONS */
  /** toggle class in .app-body and .app-sidenav elements */
  toggleElements() {
    let body = angular.element(document.querySelector('.app-body'));
    let sidenav = angular.element(document.querySelector('.app-sidenav'));
      
    // header-nav is closed?
    if (this.cssClass === '') {
      body.removeClass(this.cssName);
      sidenav.removeClass(this.cssName);
    } else {
      body.addClass(this.cssName);
      sidenav.addClass(this.cssName);
    }
  }
}

// Injection array for minification compatibility
let inject = [headerNav];

/** @exports injection array with service class */
export default {
  name: serviceName,
  service: inject
};