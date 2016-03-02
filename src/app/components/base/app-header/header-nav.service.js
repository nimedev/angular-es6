/**
 * Service to control header navigation visibility.
 * @name headerNav
 * @class HeaderNav
 */
// Service name
let serviceName = 'headerNav';

// Service class
class HeaderNav {
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
  }
    
  /** Open header-nav */
  open() {
    this.cssClass = this.cssName;
  }
    
  /** Change header-nav visibility */
  toggle() {
    (this.cssClass === '') ? this.open() : this.close();
  }
}

// Injection array for minification compatibility
HeaderNav.$inject = [];

/** @exports service name and class */
export default {
  name: serviceName,
  service: HeaderNav
};