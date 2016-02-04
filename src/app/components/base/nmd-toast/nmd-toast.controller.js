/**
 * Controller for nmd-toast component.
 * @class NmdToastCtrl
 * @param {Object} $timeout - to create toast delay.
 */
// Controller class
class NmdToastCtrl {
  /*@ngInject*/
  constructor($timeout) {
    // Save dependencies
    this.$timeout = $timeout;

    /** Class Fields */
  }

  /** Class Methods */
}

// Injection array for minification compatibility
let inject = ['$timeout', NmdToastCtrl];

/** @exports injection array with controller class */
export default inject;