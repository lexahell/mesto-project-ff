import './pages/index.css';
import initialCards from './data/cards.js';
import {
  createCardElement,
  handleCardLikeClick,
  removeCardElement,
} from './components/card.js';
import { closeModal, openModal } from './components/modal.js';

const placeList = document.querySelector('.places__list');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const popupTypeEdit = document.querySelector('.popup_type_edit');
const popupTypeNewCard = document.querySelector('.popup_type_new-card');
const popups = document.querySelectorAll('.popup');
const newPlaceForm = document.forms['new-place'];
const editProfileForm = document.forms['edit-profile'];
const nameInput = editProfileForm.elements.name;
const descriptionInput = editProfileForm.elements.description;

function handleEditProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  closeModal(popupTypeEdit);
}

function handleNewPlaceFormSubmit(evt) {
  evt.preventDefault();
  const newCard = {
    name: newPlaceForm.elements['place-name'].value,
    link: newPlaceForm.elements['link'].value,
  };
  placeList.prepend(
    createCardElement(newCard, removeCardElement, handleCardLikeClick)
  );
  closeModal(popupTypeNewCard);
}

initialCards.forEach((card) => {
  placeList.append(
    createCardElement(card, removeCardElement, handleCardLikeClick)
  );
});

profileEditButton.addEventListener('click', () => {
  nameInput.value = document.querySelector('.profile__title').textContent;
  descriptionInput.value = document.querySelector(
    '.profile__description'
  ).textContent;
  openModal(popupTypeEdit);
  editProfileForm.addEventListener('submit', handleEditProfileFormSubmit);
});

profileAddButton.addEventListener('click', () => {
  newPlaceForm.reset();
  openModal(popupTypeNewCard);
  newPlaceForm.addEventListener('submit', handleNewPlaceFormSubmit);
});

popups.forEach((popup) => {
  const closeButton = popup.querySelector('.popup__close');
  closeButton.addEventListener('click', () => {
    closeModal(popup);
  });
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target === popup) {
      closeModal(popup);
    }
  });
});
