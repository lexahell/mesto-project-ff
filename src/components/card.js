import { openModal } from './modal';

const cardTemplate = document.querySelector('#card-template').content;

function createCardElement(
  card,
  removeCardElement,
  handleCardLikeClick,
  handleCardImgClick
) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardTitle = cardElement.querySelector('.card__title');
  const cardImg = cardElement.querySelector('.card__image');
  const cardDeleteButton = cardElement.querySelector('.card__delete-button');
  const cardLikeButton = cardElement.querySelector('.card__like-button');
  cardTitle.textContent = card.name;
  cardImg.alt = card.name;
  cardImg.src = card.link;
  cardImg.addEventListener('click', () => handleCardImgClick(card));
  cardDeleteButton.addEventListener('click', () => {
    removeCardElement(cardElement);
  });
  cardLikeButton.addEventListener('click', handleCardLikeClick);
  return cardElement;
}

function removeCardElement(cardElement) {
  cardElement.remove();
}

function handleCardLikeClick(evt) {
  evt.target.classList.toggle('card__like-button_is-active');
}

export { createCardElement, removeCardElement, handleCardLikeClick };
