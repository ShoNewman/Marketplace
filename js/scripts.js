function userSubmittedInformation (event) {
  console.log('doing stuff here!')
}

$(document).ready(function () {
  $(form).submit(userSubmittedInformation)
})