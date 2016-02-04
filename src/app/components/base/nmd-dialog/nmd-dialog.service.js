/**
 * Service used to add a dialog component in html body.
 * @name nmdDialog
 * @class Dialog
 * @param {Object} $compile - to compile new dialog directive.
 * @param {Object} $rootScope - to create new scope for compiled component.
 */
// Service name
let serviceName = 'nmdDialog';

// Service class
class Dialog {
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
    
    // remove component from DOM
    dialog.remove();

    this.toggleElements();
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
let inject = ['$compile', '$rootScope', Dialog];

/** @exports injection array with service class */
export default {
  name: serviceName,
  service: inject
};