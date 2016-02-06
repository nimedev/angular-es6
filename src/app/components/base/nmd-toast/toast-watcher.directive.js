/**
 * Directive to check component status.
 * @name toastWatcher
 * @class ToastWatcher
 * @param {Object} $rootScope - to generate shown and hide events. 
 * @param {Object} $timeout - to cancel toast timmer when force and generate 
 *                            delay for destroy element from DOM desctruction
 * 
 */
// Directive name
let directiveName = 'toastWatcher';

// Directive class
class ToastWatcher {
  /*@ngInject*/
  constructor($timeout, $rootScope) {
    // Save dependencies

    /** Class Fields */
    this.restrict = 'A';

    /** Class Methods */
    
    // Link function
    this.link = (scope, el, attr, ctrl) => {
      // The directive is inserted in component child to get access
      // of controller scope.
      let component = el.parent();
      
      // Generate 'toastShown' event and add component element
      $timeout(() =>$rootScope.$emit('toastShown', component), 50); 
    
      // Wait for the scope destruction 
      scope.$on('$destroy', () => {
        // cancel toast timmer
        $timeout.cancel(scope.$ctrl.timmer);
      
        // remove component from DOM.
        // Insert a delay to eliminate for CSS animation porpouses.
        component.addClass('toast--close');
        $timeout(() => component.remove(), 1000);
        
        // Generate 'toastHide' event
        $rootScope.$emit('toastHide', component);
      });
    };
  }

  /** Class Methods */

  /** Directive factory */
  static factory($timeout, $rootScope) {
    ToastWatcher.instance = new ToastWatcher($timeout, $rootScope);
    return ToastWatcher.instance;
  }
}

// Injection array for minification compatibility
ToastWatcher.factory.$inject = ['$timeout', '$rootScope'];

/** @exports directive name and class */
export default {
  name: directiveName,
  directive: ToastWatcher.factory
};