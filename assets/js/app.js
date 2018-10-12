const submitButton = document.getElementById('send');

submitButton.addEventListener('click', function(e) {
  let newUser = new CreateUser();
  console.log(newUser.validateText());
  e.preventDefault();
})