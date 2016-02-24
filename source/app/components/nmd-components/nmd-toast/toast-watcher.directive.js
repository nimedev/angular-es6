/**
 * Directive to check component status.
 * @name toastWatcher
 * @param {Object} $rootScope - to generate shown and hide events. 
 * @param {Object} $timeout - to cancel toast timmer when force and generate 
 *                            delay for destroy element from DOM desctruction
 */
// Directive name
const directiveName = 'toastWatcher';

// Directive Function
const directive = ($rootScope, $timeout) => {
  let directive = {
    link: link,
    restrict: 'A'
  };
  return directive;

  /////////////////
  /** Link function */
  function link(scope, element, attrs) {
    // The directive is inserted in component child to get access
    // of controller scope.
    let component = element.parent();
      
    // Generate 'toastShown' event and add component element
    $timeout(() => $rootScope.$emit('toastShown', component), 50); 
    
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
  }
};

// Injection array for minification compatibility
directive.$inject = ['$rootScope', '$timeout'];

/** @exports directive name and class */
export default {
  name: directiveName,
  directive: directive
};