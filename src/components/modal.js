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

export { openModal, closeModal };
