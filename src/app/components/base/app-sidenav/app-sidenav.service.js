/**
 * Service to control app-sidenav component.
 * @class sideNav
 * @param {Object} $state - to change ui-router state.
 * @param {Object} $window - to get initial size.
 */
/** @exports service name */
export const serviceName = 'sideNav';

/** @exports service class */
export class sideNav {
  /*@ngInject*/
  constructor($state, $window) {
    // Inject array for minification compatibility
    this.$inject = ['$state', '$window'];

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