/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {

  window.GOVUKFrontend.initAll()

  // Select all checkbox for multiple venues
  $('#selectallvenues').click(function() {
    $('input:checkbox').not(this).prop('checked', this.checked);
  });

});