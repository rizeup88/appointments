$(document).ready(function() {
  $('form#appt').submit(function(event) {
	var firstnameInput = $('input#firstname').val();
	var lastnameInput = $('input#lastname').val();
	var addressInput = $('input#address').val();
	var cityInput = $('input#city').val();
	var stateSelect = $('select#state').val();
	var zipInput = $('input#zip').val();
	var dateSelect = $('select#date').val();
	var timeSelect = $('select#time').val();

	$('.firstname').text(firstnameInput);
	$('.lastname').text(lastnameInput);
	$('.address').text(addressInput);
	$('.city').text(cityInput);
	$('.state').text(stateSelect);
	$('.zip').text(zipInput);
	$('.date').text(dateSelect);
	$('.time').text(timeSelect);

	alert('Appointment Confirmed!')

    $('#confirmation').show();

    event.preventDefault();
  });
});