/**
 * Directive to close dropdown menu when click in a sibbling element.
 * @name closeDD
 */
// Directive name
const directiveName = 'closeDd';

// Directive Function
const directive = () => {
  let directive = {
    link: link,
    restrict: 'A',
    scope: {}
  };
  return directive;

  /////////////////
  /** Link function */
  function link(scope, element, attrs) {
    let toggleButton = element.parent().find('input');
      
    // Change checked property to checkbox when click in element
    element.on('click', () => toggleButton[0].checked = false);
  }
};

// Injection array for minification compatibility
directive.$inject = [];

/** @exports directive name and class */
export default {
  name: directiveName,
  directive: directive
};