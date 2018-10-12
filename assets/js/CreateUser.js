class CreateUser {
  constructor() {
    this.nameInput = document.getElementById('name');

    this.sendButton = document.getElementById('send');
  }

  validateText(){
    this.nameInputValue = document.getElementById('name').value;
    this.nameInputError = document.getElementById('name-error');

    if (this.nameInputValue.length < 3) {
      this.nameInputError.classList.remove("field__error--hidden");
    } else {
      this.nameInputError.classList.add("field__error--hidden");
    }
}
}