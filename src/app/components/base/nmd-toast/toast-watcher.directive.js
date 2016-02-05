/**
 * Directive. to check component estatus.
 * @name toastWatcher
 * @class ToastWatcher
 * @param {Object} $timeout - to cancel toast timmer when force desctruction.
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

    // link function
    this.link = (scope, el, attr, ctrl) => {
      // The directive is inserted in component child to get access
      // of controller scope.
      let component = el.parent();
    
      // Wait for the scope destruction 
      scope.$on('$destroy', () => {
        // cancel toast timmer
        this.$timeout.cancel(scope.$ctrl.timmer);
      
        // remove component from DOM.
        
        // Insert a delay to elminate for CSS animation porpouses.
        component.addClass('toast--close');
        this.$timeout(() => component.remove(), 1000);
      });
    };
  }

  /** Class Methods */
}

// Injection array for minification compatibility
let inject = ['$timeout', ($timeout) => new ToastWatcher($timeout)];

/** @exports injection array with directive class */
export default {
  name: directiveName,
  directive: inject
};