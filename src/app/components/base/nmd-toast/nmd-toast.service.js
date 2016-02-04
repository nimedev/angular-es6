/**
 * Service to control nmd-toast component.
 * @name nmdToast
 * @class NmdToast
 * @param {Object} $compile - to compile new dialog directive.
 * @param {Object} $rootScope - to create new scope for compiled component.
 */
// Service name
let serviceName = 'nmdToast';

// Service class
class NmdToast {
  /*@ngInject*/
  constructor($compile, $rootScope) {
    // Save dependencies
    this.$compile = $compile;
    this.$rootScope = $rootScope;

    /** Class Fields */

  }

  /** Class Methods */
  /** Remove toast from DOM. */
  close() {
    let toast = angular.element(document).find('nmd-toast');
    
    // remove component from scope
    toast.scope().$destroy();
    
    // remove component from DOM
    toast.remove();
  }
  
  /** 
   * Append a toast at end of body.
   * @param {String} msg - Text message of toast
   * @param {String} action - Text for button of toast
   */
  open(msg, action) {
    let newToast = `<nmd-toast></nmd-toast>`; 
    let node = angular.element(document).find('body');
    let oldToast = angular.element(document).find('nmd-toast');
    let scope;
    
    // Create new toast if is no there other toast
    if (oldToast.length === 0) {
      // Create new isolate scope
      scope = this.$rootScope.$new(true);
    
      // Compile dialog template and add to body
      node.append(this.$compile(newToast)(scope));
    }
  }
}

// Injection array for minification compatibility
let inject = ['$compile', '$rootScope', NmdToast];

/** @exports injection array with service class */
export default {
  name: serviceName,
  service: inject
};