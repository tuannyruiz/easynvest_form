const submitButton = document.getElementById('send');

submitButton.addEventListener('click', function(e) {
  let newUser = new CreateUser();
  e.preventDefault();
})