/**
 * Service to get i18n text.
 * @name i18n
 * @class I18n
 * @param {Object} $translate - to get i18n texts using translate service.
 */
// Service name
let serviceName = 'i18n';

// Service class
class I18n {
  /*@ngInject*/
  constructor($translate) {
    // Save dependencies
    this.$translate = $translate;

    /** Class Fields */
    this.notifications = [];
  }

  /** Class Methods */
  init() {
    this.getNotifications();
  }
  
  /** HELPER FUNCTIONS */
  /** Get notifications text usign translate service */
  getNotifications() {
    return this.$translate([
      'NOTIFICATIONS.LANGUAGE'
    ]).then((translations) => {
      angular.copy(translations, this.notifications);
      return this.notifications;
    });
  }
}

// Injection array for minification compatibility
I18n.$inject = ['$translate'];

/** @exports service name and class */
export default {
  name: serviceName,
  service: I18n
};