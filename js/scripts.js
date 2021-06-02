function userSubmittedInformation (event) {  
  const inputNumCaterpillars = $('#numCaterpillars').val();
  const inputColorCaterpillar = $('#colorCaterpillar').val();
  const inputCaterpillarType = $('input:radio[name=caterpillarType]:checked').val();
  const inputDeliveryDate = $('#deliveryDate').val();
  const inputFirstName = $('#firstName').val();
  const inputLastName = $('#lastName').val();
  const inputEmail = $('#email').val();
  const inputAddress = $('#address').val();
  const inputCity = $('#city').val();
  const inputState = $('#state').val();
  const inputZip = $('#zipcode').val();

  $('#receipt .colorCaterpillar').text(inputColorCaterpillar);
  $('#receipt .numCaterpillars').text(inputNumCaterpillars);
  $('#receipt .caterpillarType').text(inputCaterpillarType);
  $('#receipt .deliveryDate').text(inputDeliveryDate);
  $('#receipt .firstName').text(inputFirstName);
  $('#receipt .lastName').text(inputLastName);
  $('#receipt .email').text(inputEmail);
  $('#receipt .address').text(inputAddress);
  $('#receipt .city').text(inputCity);
  $('#receipt .state').text(inputState);
  $('#receipt .zipcode').text(inputZip);

  const inputCaterpillarPowers1 = $('#caterpillarPowers1:checked').val();

  if (inputCaterpillarPowers1 === undefined) {
    $('#receipt .caterpillarPowers').text("");
  } else {
    $('#receipt .caterpillarPowers').text(inputCaterpillarPowers1);
  }

  event.preventDefault();  
}

$(document).ready(function () {
  $('form').submit(userSubmittedInformation);
})