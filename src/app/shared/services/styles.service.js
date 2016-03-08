/**
 * Service to use javascript style related functions.
 * @name styles
 * @class Styles
 * @param {Object} $windows - for DOM manipulation
 */
/** Import angular */
import angular from 'angular'

// Service name
let serviceName = 'styles'

// Service class
class Styles {
  constructor($window) {
    // Save dependencies
    this.$window = $window

    /** Class Fields */
    this.html = angular.element(document).find('html')[0]
  }

  /** Class Methods */
  /** 
   * Return de CSS value of a property.
   * @param {string} element - Element to get property.
   * @param {string} property - Name of css property to get.
   * @return {string} property value 
   */
  getCssProperty(element, property) {
    return this.$window.getComputedStyle(element, null).getPropertyValue(property)
  }

  /**
   * Return de root font-size.
   */
  getRootFontSize() {
    return Number.parseInt(this.getCssProperty(this.html, 'font-size'))
  }
}

// Injection array for minification compatibility
Styles.$inject = ['$window']

/** @exports service name and class */
export default {
  name: serviceName,
  service: Styles
}