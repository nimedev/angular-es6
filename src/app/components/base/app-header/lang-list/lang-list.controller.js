/**
 * Controller for lang-list component.
 * @class LangListCtrl
 * @param {Object} $translate - to change language.
 * @param {Object} i18n - to get notifications texts.
 * @param {Object} nmdToast - to show toast when change language.
 */
/** @exports Controller class */
export default class LangListCtrl {
  /*@ngInject*/
  constructor($translate, i18n, nmdToast) {
    // Save dependencies
    this.$translate = $translate;
    this.i18n = i18n;
    this.nmdToast = nmdToast;

    /** Class Fields */
    this.languages = ['en', 'es'];
  }

  /** Class Methods */
  /** Change language in runtime. */
  changeLanguage(langKey) {
    let notiText = this.i18n.notifications['NOTIFICATIONS.LANGUAGE'];
    this.$translate.use(langKey);
    this.nmdToast.show(notiText);
  }
}

// Injection array for minification compatibility
LangListCtrl.$inject = ['$translate', 'i18n', 'nmdToast'];