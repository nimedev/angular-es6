/**
 * Directive to watch toast events and positioning FAB button.
 * @name fabWatcher
 * @class FabWatcher
 * @param {Object} $rootScope - to catch toast events.
 */
// Directive name
let directiveName = 'fabWatcher';

// Directive class
class FabWatcher {
  /*@ngInject*/
  constructor($rootScope) {
    // Save dependencies

    /** Class Fields */
    this.restrict = 'A';

    /** Link function */
    this.link = (scope, el, attr, ctrl) => {
      let component = el[0];
      
      // Action when toast is shown
      $rootScope.$on('toastShown', ($event, element) => {
        let html = angular.element(document).find('html')[0];
        let style = window.getComputedStyle(html, null).getPropertyValue('font-size'); 
        let fontSize = Number.parseInt(style);
        
        // Move Element from bottom.
        let toast = element[0];
        let bottom = toast.clientHeight / fontSize + 1;
        component.style.bottom = bottom + 'rem';
      });
      
      // Action when toast is start hide
      $rootScope.$on('toastHide', ($event, element) => {
        component.style['bottom'] = '';
      });
    };
  }

  /** Class Methods */

  /** Directive factory */
  static factory($rootScope) {
    FabWatcher.instance = new FabWatcher($rootScope);
    return FabWatcher.instance;
  }
}

// Injection array for minification compatibility
FabWatcher.factory.$inject = ['$rootScope'];

/** @exports directive name and class */
export default {
  name: directiveName,
  directive: FabWatcher.factory
};