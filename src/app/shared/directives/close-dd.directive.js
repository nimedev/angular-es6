/**
 * Directive to close dropdown menu when click in html object.
 * @name closeDD
 */
/** Angular modules */
import angular from 'angular'

// Directive name
const directiveName = 'closeDd'

// Directive Function
const directive = () => {
  let directive = {
    link: link,
    restrict: 'A'
  }
  return directive

  /////////////////
  /** Link function */
  function link(scope, element, attrs) {
    const id = attrs[directiveName]
    const html = angular.element(document).find('html')
    const toggleButton = element.parent().find('input')

    // Change checked property to checkbox when click in element
    html.on('click', event => {
      const targetElement = event.target

      // Try to get for attribute to see if element is related whit checkbox.
      const targetFor = targetElement.attributes.for

      // Try to get cdd-disabled attribute to cancel close operation.
      const isDisabled = targetElement.attributes['cdd-disabled']

      // Only change checked property if the click element is diferent to
      // the checkbox input or asociate label to this or is closed disabled
      if (!isDisabled && targetElement.id !== id && (!targetFor || targetFor.value !== id)) {
        toggleButton[0].checked = false
      }
    })
  }
}

// Injection array for minification compatibility
directive.$inject = []

/** @exports directive name and class */
export default {
  name: directiveName,
  factory: directive
}