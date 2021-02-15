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

  if (document.getElementById('dm2-govuk-box-message--courses')) {
    setTimeout(function() {$('#loading-message').html("Processing data");}, 2500);
    setTimeout(function() {window.location.href = "/dm2/data-upload/courses/checkandpublish";}, 6000);
  }
  if (document.getElementById('dm2-govuk-box-message--apprenticeships')) {
    setTimeout(function() {$('#loading-message').html("Processing data");}, 2500);
    setTimeout(function() {window.location.href = "/dm2/data-upload/apprenticeships/checkandpublish";}, 6000);
  }

})
