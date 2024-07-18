const cardTemplate = document.querySelector('#card-template').content;
const placeList = document.querySelector('.places__list');

function createCardElement(card, removeCardElement) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardTitle = cardElement.querySelector('.card__title');
  const cardImg = cardElement.querySelector('.card__image');
  const cardDeleteButton = cardElement.querySelector('.card__delete-button');

  cardTitle.textContent = card.name;
  cardImg.src = card.link;
  cardDeleteButton.addEventListener('click', () => {
    removeCardElement(cardElement);
  });

  return cardElement;
}
function removeCardElement(cardElement) {
  cardElement.remove();
}

initialCards.forEach((card) => {
  placeList.append(createCardElement(card, removeCardElement));
});
