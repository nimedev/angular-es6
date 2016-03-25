/**
 * Service to get i18n text.
 * @name i18n
 * @class I18n
 * @param {Object} $translate - to get i18n texts using translate service
 *  and change language.
 * @param {Object} nmdToast - to show change language notification.
 */
/** Angular modules */
import angular from 'angular'

// Service name
let serviceName = 'i18n'

// Service class
class I18n {
  constructor($translate, nmdToast) {
    /** Dependencies */
    this.$translate = $translate
    this.nmdToast = nmdToast

    /** Class Fields */
    this.texts = []
  }

  /** 
   * Change app langage
   * @param {String} lang - code of language to change 
   */
  changeLanguage(lang) {
    this.$translate.use(lang)
  }

  /** Get app texts */
  load() {
    return this.$translate([
      'NOTIFICATIONS.LANGUAGE'
    ]).then(translations => {
      angular.copy(translations, this.texts)
      return this.texts
    })
  }

  /** Get app texts with toast notification */
  loadAndNotify() {
    return this.load().then(() => {
      let notiText = this.texts['NOTIFICATIONS.LANGUAGE']
      this.nmdToast.show(notiText)
    })
  }
}

// Injection array for minification compatibility
I18n.$inject = ['$translate', 'nmdToast']

/** @exports service name and class */
export default {
  name: serviceName,
  service: I18n
}