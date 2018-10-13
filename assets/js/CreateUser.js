class CreateUser {
  constructor() {
    this.storageName = "easynvest-users";
    this.storage = localStorage;

    this.handleAddNewUser = this.handleAddNewUser.bind(this);


    this.nameInput = document.getElementById('name');
    this.emailInput = document.getElementById('email');
    this.cpfInput = document.getElementById('cpf');
    this.phoneInput = document.getElementById('phone');

    this.nameInputError = document.getElementById('name-error');
    this.sendButton = document.getElementById('send');

    this.createStorage();
    this.sendButton.addEventListener('click', this.handleAddNewUser);
    this.validateText();
  }

  createStorage() {
		if(this.storage.getItem(this.storageName) == null) {
      let users = {};
      users.items = [];
      this.storage.setItem(this.storageName, this._toJSONString(users));
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

  handleAddNewUser() {
    let userObj = {
      name: this.nameValue = document.getElementById('name').value,
      email: this.emailValue = document.getElementById('email').value,
      cpf: this.cpfValue = document.getElementById('cpf').value,
      phone: this.phoneValue = document.getElementById('phone').value
    }

    this._addNewUser(userObj);
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

  _addNewUser(values) {
    var users = this.storage.getItem(this.storageName);
    var usersObject = this._toJSONObject(users);
    var usersCopy = usersObject;
    var items = usersCopy.items;
    items.push(values);
    
    this.storage.setItem(this.storageName, this._toJSONString(usersCopy));
  }

  _toJSONString(obj) {
    let str = JSON.stringify(obj);
    return str;
  }

  _toJSONObject(str) {
    var obj = JSON.parse(str);
    return obj;
  }
}