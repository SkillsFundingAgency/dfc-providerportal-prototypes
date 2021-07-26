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

  $('#continue-delivery-type').on('click', function (e) {
    e.preventDefault()
    const radioValue = $('input[name=delivery-type]:checked').val()

    if (radioValue === 'Classroom') {
      window.location.href = '/Vincent/course-details-classroom'
    } else if (radioValue === 'Online') {
      window.location.href =
        '/Vincent/course-details-online'
    } else if (radioValue === 'Work-based') {
      window.location.href = '/Vincent/course-details-Workbased'
    }
  })


// DM v2 loaders

  if (document.getElementById('dm2-govuk-box-message--courses')) {
    setTimeout(function() {$('#loading-message').html("Processing data");}, 2500);
    setTimeout(function() {window.location.href = "/dm2/data-upload/courses/checkandpublish";}, 6000);
  }
  if (document.getElementById('dm2-govuk-box-message--apprenticeships')) {
    setTimeout(function() {$('#loading-message').html("Processing data");}, 2500);
    setTimeout(function() {window.location.href = "/dm2/data-upload/apprenticeships/checkandpublish";}, 6000);
  }


// DM v3 loaders

if (document.getElementById('dm3-loader--courses')) {
  setTimeout(function() {$('#loading-message').html("Processing data");}, 2500);
  setTimeout(function() {window.location.href = "/dm3/data-upload/courses/goto-validation";}, 6000);
}
if (document.getElementById('dm3-loader--apprenticeships')) {
  setTimeout(function() {$('#loading-message').html("Processing data");}, 2500);
  setTimeout(function() {window.location.href = "/dm3/data-upload/apprenticeships/goto-validation";}, 6000);
}


// DM v4 loaders

  if (document.getElementById('dm4-loader--courses')) {
    setTimeout(function() {$('#loading-message').html("Processing data");}, 2500);
    setTimeout(function() {window.location.href = "/dm4/data-upload/courses/goto-validation";}, 6000);
  }
  if (document.getElementById('dm4-loader--venues')) {
    setTimeout(function() {$('#loading-message').html("Processing data");}, 1500);
    setTimeout(function() {window.location.href = "/dm4/data-upload/venues/goto-validation";}, 3000);
  }


// DM v5 loaders

  if (document.getElementById('dm5-loader--courses')) {
    setTimeout(function() {$('#loading-message').html("Processing data");}, 2500);
    setTimeout(function() {window.location.href = "/dm5/data-upload/courses/goto-validation";}, 6000);
  }
  if (document.getElementById('dm5-loader--apprenticeships')) {
    setTimeout(function() {$('#loading-message').html("Processing data");}, 1500);
    setTimeout(function() {window.location.href = "/dm5/data-upload/apprenticeships/goto-validation";}, 3000);
  }
  if (document.getElementById('dm5-loader--venues')) {
    setTimeout(function() {$('#loading-message').html("Processing data");}, 1500);
    setTimeout(function() {window.location.href = "/dm5/data-upload/venues/goto-validation";}, 3000);
  }
  if (document.getElementById('dm5-loader--venues-deleted')) {
    setTimeout(function() {$('#loading-message').html("Processing data");}, 1500);
    setTimeout(function() {window.location.href = "/dm5/venues-deleted-upload/goto-validation";}, 3000);
  }

  if (document.getElementById('dm5-loader--courses-toomanyerrors')) {
    setTimeout(function() {$('#loading-message').html("Processing data");}, 2500);
    setTimeout(function() {window.location.href = "/dm5/data-upload-toomanyerrors/courses/goto-validation-toomanyerrors";}, 6000);
  }
  if (document.getElementById('dm5-loader--apprenticeships-toomanyerrors')) {
    setTimeout(function() {$('#loading-message').html("Processing data");}, 1500);
    setTimeout(function() {window.location.href = "/dm5/data-upload-toomanyerrors/apprenticeships/goto-validation-toomanyerrors";}, 3000);
  }
  if (document.getElementById('dm5-loader--venues-toomanyerrors')) {
    setTimeout(function() {$('#loading-message').html("Processing data");}, 1500);
    setTimeout(function() {window.location.href = "/dm5/data-upload-toomanyerrors/venues/goto-validation-toomanyerrors";}, 3000);
  }

  if (document.getElementById('dm5-loader--courses-noerrors')) {
    setTimeout(function() {$('#loading-message').html("Processing data");}, 2500);
    setTimeout(function() {window.location.href = "/dm5/data-upload-noerrors/courses/goto-validation-noerrors";}, 6000);
  }
  if (document.getElementById('dm5-loader--apprenticeships-noerrors')) {
    setTimeout(function() {$('#loading-message').html("Processing data");}, 1500);
    setTimeout(function() {window.location.href = "/dm5/data-upload-noerrors/apprenticeships/goto-validation-noerrors";}, 3000);
  }
  if (document.getElementById('dm5-loader--venues-noerrors')) {
    setTimeout(function() {$('#loading-message').html("Processing data");}, 1500);
    setTimeout(function() {window.location.href = "/dm5/data-upload-noerrors/venues/goto-validation-noerrors";}, 3000);
  }

  if (document.getElementById('v3-loader--courses')) {
    setTimeout(function() {$('#loading-message').html("Processing data");}, 2500);
    setTimeout(function() {window.location.href = "/v3/data-upload/courses/goto-validation";}, 6000);
  }
  if (document.getElementById('v3-loader--apprenticeships')) {
    setTimeout(function() {$('#loading-message').html("Processing data");}, 1500);
    setTimeout(function() {window.location.href = "/v3/data-upload/apprenticeships/goto-validation";}, 3000);
  }
  if (document.getElementById('v3-loader--venues')) {
    setTimeout(function() {$('#loading-message').html("Processing data");}, 1500);
    setTimeout(function() {window.location.href = "/v3/data-upload/venues/goto-validation";}, 3000);
  }


})
