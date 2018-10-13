class CreateUser {
  constructor() {
    this.tableName = "easynvest-users";
    this.storage = localStorage;

    this.nameInput = document.getElementById('name');
    this.emailInput = document.getElementById('email');
    this.cpfInput = document.getElementById('cpf');
    this.phoneInput = document.getElementById('phone');

    this.nameInputError = document.getElementById('name-error');
    this.sendButton = document.getElementById('send');

    this.createStorage();
    this.validateText();
  }

  createStorage() {
		if(this.storage.getItem(this.tableName) == null) {
      let users = {};
      users.items = [];
      this.storage.setItem(this.tableName, this._toJSONString(users));
    }
  }

  validateText() {
    this.nameInputValue = this.nameInput.value;

    if (this.nameInputValue.length < 3) {
      this.nameInputError.classList.remove("field__error--hidden");
      this.nameInput.classList.add('field__input--error');
    } else {
      this.nameInputError.classList.add("field__error--hidden");
      this.nameInput.classList.remove('field__input--error');
    }
  }

  _getInitialUsers() {
    const url = "https://private-21e8de-rafaellucio.apiary-mock.com/users";

    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        return data;
    })
  }

  _toJSONString(obj) {
    let str = JSON.stringify(obj);
    return str;
  }
}