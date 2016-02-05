/**
 * Controller for lang-list component.
 * @class LangListCtrl
 * @param {Object} $translate - to change language.
 * @param {Object} nmdToast - to show toast when change language.
 */
// Controller class
class LangListCtrl {
  /*@ngInject*/
  constructor($translate, nmdToast) {
    // Save dependencies
    this.$translate = $translate;
    this.nmdToast = nmdToast;

    /** Class Fields */
    this.languages = ['en', 'es'];
  }

  /** Class Methods */
  /** Change language in runtime. */
  changeLanguage(langKey) {
    this.$translate.use(langKey);
    this.nmdToast.show('Language changed');
  }
}

// Injection array for minification compatibility
let inject = ['$translate', 'nmdToast', LangListCtrl];

/** @exports injection array with controller class */
export default inject;