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
    // Default options for the toast
    this.message = '';
    this.duration = 4000;
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
   * @param {Object} options - options object:
   * {
   *   duration: 4000 // Display time (0 to show permanently)
   * }
   */
  open(msg, options) {
    let newToast = '<nmd-toast></nmd-toast>';
    let node = angular.element(document).find('body');
    let oldToast = angular.element(document).find('nmd-toast');
    let scope;
    
    // Verify custom message
    if (msg) {
      this.message = msg;
    }
    
    // Verify options
    if (options) {
      // Add duration
      if (options.duration) {
        this.duration = options.duration;
      }
    }
    
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