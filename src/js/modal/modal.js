import { createArtistModalMarkup } from './modal-render';

const backdrop = modalRoot.querySelector('[data-modal]');
const modalRoot = document.querySelector('[data-modal-wrapper]');
const closeBtn = modalRoot.querySelector('[data-closeBtn]');

export function openArtistModal(artist, albums) {
  console.log('openArtistModal');

  modalRoot.innerHTML = createArtistModalMarkup(artist, albums);
  document.body.classList.add('modal-open');
  backdrop.classList.add('is-open');
  
  const closeModal = () => {
    document.body.classList.remove('modal-open');
    backdrop.classList.remove('is-open');
    backdrop.removeEventListener('click', onBackdropClick);
    window.removeEventListener('keydown', onEsc);
    closeBtn.removeEventListener('click', closeModal);
  };

  const onEsc = e => e.key === 'Escape' && closeModal();
  const onBackdropClick = e => e.target === backdrop && closeModal();

  closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', onBackdropClick);
  window.addEventListener('keydown', onEsc);
}

export function showArtistModalLoader() {
  modalRoot.innerHTML = `
    <div class="modal-backdrop">
      <div class="modal">
        <p class="loader"></p>
      </div>
    </div>
  `;
  // document.body.classList.add('modal-open');
}
