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
    this.setDefault();
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
   *   duration: 4000,      // Display time in milliseconds (0 to show permanently)
   *   button: {            // Action button (Don't show button if no provide it)
   *     text: 'DISMISS'    // Button text
   *     action: () => {}   // Callback function. If no action then close toast.
   *   }
   * }
   */
  show(msg, options) {
    let newToast = '<nmd-toast></nmd-toast>';
    let node = angular.element(document).find('body');
    let oldToast = angular.element(document).find('nmd-toast');
    let scope;
    
    // Set default values
    this.setDefault();
    
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
      
      // Add button settings
      if (options.button) {
        this.button = options.button;
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
  
  /** HELPER FUNCTIONS */
  /** Set default values for toast */
  setDefault() {
    this.message = '';
    this.duration = 4000;
    this.button = {};
  }
}

// Injection array for minification compatibility
let inject = ['$compile', '$rootScope', NmdToast];

/** @exports injection array with service class */
export default {
  name: serviceName,
  service: inject
};