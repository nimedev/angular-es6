/**
 * Directive to check component status.
 * @name toastWatcher
 * @class ToastWatcher
 * @param {Object} $timeout - to cancel toast timmer when force and generate 
 *                            delay for destroy element from DOM desctruction.
 */
// Directive name
let directiveName = 'toastWatcher';

// Directive class
class ToastWatcher {
  /*@ngInject*/
  constructor($timeout) {
    // Save dependencies
    this.$timeout = $timeout;

    /** Class Fields */
    this.restrict = 'A';

    /** Class Methods */

    // Link function
    this.link = (scope, el, attr, ctrl) => {
      // The directive is inserted in component child to get access
      // of controller scope.
      let component = el.parent();
    
      // Wait for the scope destruction 
      scope.$on('$destroy', () => {
        // cancel toast timmer
        this.$timeout.cancel(scope.$ctrl.timmer);
      
        // remove component from DOM.
        // Insert a delay to eliminate for CSS animation porpouses.
        component.addClass('toast--close');
        this.$timeout(() => component.remove(), 1000);
      });
    };
  }

  /** Class Methods */

  /** Directive factory */
  static factory($timeout) {
    ToastWatcher.instance = new ToastWatcher($timeout);
    return ToastWatcher.instance;
  }
}

// Injection array for minification compatibility
ToastWatcher.factory.$inject = ['$timeout'];

/** @exports directive name and class */
export default {
  name: directiveName,
  directive: ToastWatcher.factory
};