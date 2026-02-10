import { fetchArtistById, fetchArtistAlbums } from './modal-api';
import { openArtistModal, showArtistModalLoader } from './modal';
import { validInput } from '../error-handler';

const gallery = document.querySelector('.art-gallery');


gallery.addEventListener('click', onLearnMoreClick);

async function onLearnMoreClick(event) {
  const btn = event.target.closest('.learn-more-btn');
  if (!btn) return;
  
  const artistId = btn.dataset.artistId;

  try {
    showArtistModalLoader();

    const [artist, albums] = await Promise.all([
      fetchArtistById(artistId),
      fetchArtistAlbums(artistId),
    ]);

    openArtistModal(artist, albums);
  } catch (error) {
    console.warn(error);
    // validInput({
    //   title: 'Помилка',
    //   message: 'Не вдалося завантажити інформацію про артиста',
    // });
  }
}


