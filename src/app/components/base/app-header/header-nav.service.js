/**
 * Service to control header navigation visibility.
 * @name headerNav
 * @class HeaderNav
 */

/** Angular Modules */
import angular from 'angular'

// Service name
let serviceName = 'headerNav'

// Service class
class HeaderNav {
  constructor() {
    /** Dependencies */

    /** Class Fields */
    this.cssName = 'header__nav-open'
    this.navOpen = false
  }

  /** Close header-nav */
  close() {
    this.navOpen = false
    this.toggleElements()
  }

  /** Open header-nav */
  open() {
    this.navOpen = true
    this.toggleElements()
  }

  /** Change header-nav visibility */
  toggle() {
    (this.navOpen) ? this.close() : this.open()
  }

  /** HELPER FUNCTIONS */
  /** toggle class in body element and app-main component */
  toggleElements() {
    const header = angular.element(document).find('app-header')

    // sidenav is open?
    if (this.navOpen) {
      header.addClass(this.cssName)
    } else {
      header.removeClass(this.cssName)
    }
  }
}

// Injection array for minification compatibility
HeaderNav.$inject = []

/** @exports service name and class */
export default {
  name: serviceName,
  service: HeaderNav
}