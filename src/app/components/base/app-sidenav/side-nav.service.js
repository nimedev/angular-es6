/**
 * Service to control app-sidenav visibility.
 * @name sideNav
 * @class SideNav
 * @param {Object} $state - to change ui-router state.
 * @param {Object} $window - to get initial size.
 */
/** Angular modules */
import angular from 'angular'

// Service name
let serviceName = 'sideNav'

// Service class
class SideNav {
  constructor($state, $window) {
    /** Dependencies */
    this.$state = $state
    this.$window = $window

    /** Class Fields */
    this.cssName = 'nav-open'
    this.isOpen = false
    this.smBreak = 600
    this.mdBreak = 960
  }

  /** Close sidenav */
  close() {
    this.isOpen = false
    this.toggleElements()
  }

  /** Open sidenav */
  open() {
    this.isOpen = true
    this.toggleElements()
  }

  /** Close sidenav only in mobile */
  safeClose() {
    if (this.$window.innerWidth < this.smBreak) {
      this.close()
    }
  }

  /** Change sidenav visibility */
  toggle() {
    (this.isOpen) ? this.close() : this.open()
  }

  /** HELPER FUNCTIONS */
  /** toggle class in body element and app-main component */
  toggleElements() {
    const body = angular.element(document).find('body')
    const sidenav = angular.element(document).find('app-sidenav')

    // sidenav is open?
    if (this.isOpen) {
      sidenav.addClass(this.cssName)
      // only add class if is in mobile
      if (this.$window.innerWidth < this.smBreak) {
        body.addClass(this.cssName)
      }
    } else {
      body.removeClass(this.cssName)
      sidenav.removeClass(this.cssName)
    }
  }
}

// Injection array for minification compatibility
SideNav.$inject = ['$state', '$window']

/** @exports service name and class */
export default {
  name: serviceName,
  service: SideNav
}