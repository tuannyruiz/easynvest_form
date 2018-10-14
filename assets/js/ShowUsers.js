class ShowUsers {
  constructor() {
    this.cardsWrapper = document.getElementById('users');

    this.editButton = document.getElementById('edit');
    this.deleteButton = document.getElementById('delete');
  }

  cardsConstructor(user) {
    let cardHtml=`
      <div class="card">
        <div class="info">
          <div class="personal">
            <p class="info__line"><strong>Nome: </strong></p>
            <p class="info__line"><strong>CPF: </strong></p>
          </div>
          <div class="contact">
            <p class="info__line"><strong>E-mail: </strong></p>
            <p class="info__line"><strong>Telefone: </strong></p>
          </div>
        </div>
        <hr class="card__rule">
        <div class="actions">
          <button class="actions__button actions__button--delete" id="delete">
            <i class="zmdi zmdi-delete"></i> Excluir
          </button>
          <button class="actions__button actions__button--edit" id="edit">
            <i class="zmdi zmdi-edit"></i> Editar
          </button>
        </div>
      </div>
    `;
  }
}