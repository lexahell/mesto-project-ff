function handleEscClose(evt) {
  if (evt.key === 'Escape') {
    const modalElement = document.querySelector('.popup_is-opened');
    closeModal(modalElement);
  }
}

function openModal(modalElement) {
  document.addEventListener('keydown', handleEscClose);
  modalElement.classList.add('popup_is-opened');
}

function closeModal(modalElement) {
  document.removeEventListener('keydown', handleEscClose);
  modalElement.classList.remove('popup_is-opened');
}

function handleClickOnOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    closeModal(evt.target);
  }
}

export { openModal, closeModal, handleClickOnOverlay };
