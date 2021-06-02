function userSubmittedInformation (event) {  
  const inputFirstName = $('#firstName').val();
  const inputLastName = $('#lastName').val();
  const inputAddress = $('#address').val();
  const inputCity = $('#city').val();
  const inputState = $('#state').val();
  const inputZip = $('#zipcode').val();

  $('#receipt .firstName').text(inputFirstName);
  $('#receipt .lastName').text(inputLastName);
  $('#receipt .address').text(inputAddress);
  $('#receipt .city').text(inputCity);
  $('#receipt .state').text(inputState);
  $('#receipt .zipcode').text(inputZip);

  event.preventDefault();  
}

$(document).ready(function () {
  $('form').submit(userSubmittedInformation);
})