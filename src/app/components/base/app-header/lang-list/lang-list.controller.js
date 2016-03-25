/**
 * Controller for lang-list component.
 * @class LangListCtrl
 * @param {Object} i18n - to change language.
 */

/** @exports Controller class */
export default class LangListCtrl {
  constructor(i18n) {
    /** Dependencies */
    this.i18n = i18n

    /** Class Fields */
    this.languages = ['en', 'es']
  }

  /** Change language in runtime. */
  changeLanguage(langKey) {
    this.i18n.changeLanguage(langKey)
  }
}

// Injection array for minification compatibility
LangListCtrl.$inject = ['i18n']