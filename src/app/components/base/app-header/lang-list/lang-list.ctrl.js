/**
 * Controller for lang-list component.
 * @class LangListCtrl
 * @param {Object} $translate - ...
 */
// Controller class
class LangListCtrl {
  /*@ngInject*/
  constructor($translate) {
    // Save dependencies
    this.$translate = $translate;

    /** Class Fields */
    this.languages = ['en', 'es'];
  }

  /** Class Methods */
  /** Change language in runtime. */
  changeLanguage(langKey) {
    this.$translate.use(langKey);
  }
}

// Injection array for minification compatibility
let inject = ['$translate', LangListCtrl];

/** @exports injection array with controller class */
export default inject;