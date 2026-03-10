document.addEventListener('DOMContentLoaded', function () {
  const formName = document.querySelector('.form .name');
  const formTitle = document.querySelector('.form .title');
  const formPhone = document.querySelector('.form .phone');
  const formEmail = document.querySelector('.form .email');
  const card = document.querySelector('.card');
  const cardName = card.querySelector('.name');
  const cardTitle = card.querySelector('.title .value');
  const cardPhone = card.querySelector('.phone .value');
  const cardEmail = card.querySelector('.email .value');
  const createCardBtn = document.querySelector('.form .btn');

  createCardBtn.addEventListener('click', function () {
    cardName.textContent = formName.value;
    cardTitle.textContent = formTitle.value;
    cardPhone.textContent = formPhone.value;
    cardEmail.textContent = formEmail.value;
    card.classList.add('show');
  });
});