/**
 * Service used to add nmd-dialog component in document body.
 * @name nmdDialog
 * @class NmdDialog
 * @param {Object} $compile, $rootScope - ...
 */
// Service name
const serviceName = 'nmdDialog';

// Service class
class NmdDialog {
  /*@ngInject*/
  constructor($compile, $rootScope) {
    // Save dependencies
    this.$compile = $compile;
    this.$rootScope = $rootScope;

    /** Class Fields */
    this.cssName = 'dialog--open';
  }

  /** Class Methods */
  /** 
   * Remove a dialog component acording to nd-component attribute.
   * @param {String} component - Used to select the dialog to remove.
   */
  close(component) {
    let dialog = angular.element(document.querySelector(`nmd-dialog[nd-component=${component}]`));
    
    // remove component from scope
    dialog.scope().$destroy();
  }
  
  /** 
   * Append a dialog at end of body and insert a component inside it.
   * @param {String} component - Name of component to insert in HTML format
   *                             (component-name) 
   */
  open(component) {
    let node = angular.element(document).find('body');
    let newDialog = `<nmd-dialog nd-component="${component}" dialog-watcher></nmd-dialog>`;
    let oldDialog = document.querySelector(`nmd-dialog[nd-component=${component}]`);
    let scope;
    
    // Create new dialog if is no there a dialog with de same nd-component attribute
    if (!oldDialog) {
      // Create new isolate scope
      scope = this.$rootScope.$new(true);
    
      // Compile dialog template and add to body
      node.append(this.$compile(newDialog)(scope));

      this.toggleElements(true);
    }
  }
  
  /** HELPER FUNCTION */
  /** 
   * Toggle class that indicate open dialog in body element
   * @param {Boolean} open - Indicate if open o close dialog. 
   */
  toggleElements(open) {
    let body = angular.element(document).find('body');
    let oldDialog = angular.element(document).find('nmd-dialog');
    
    // open dialog?
    if (open) {
      body.addClass(this.cssName);
    } else if (oldDialog.length < 1) {
      // remove class if is only 1 open dialogs?
      body.removeClass(this.cssName);
    }
  }
}

// Injection array for minification compatibility
NmdDialog.$inject = ['$compile', '$rootScope'];

/** @exports service name and class */
export default {
  name: serviceName,
  service: NmdDialog
};