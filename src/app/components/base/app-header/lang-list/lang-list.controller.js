/**
 * Controller for lang-list component.
 * @class langListCtrl
 * @param {Object} $translate - ...
 */
class langListCtrl {
  /*@ngInject*/
  constructor($translate) {
    // Inject array for minification compatibility
    this.$inject = ['$translate'];

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

/** @exports controller class */
export default langListCtrl;