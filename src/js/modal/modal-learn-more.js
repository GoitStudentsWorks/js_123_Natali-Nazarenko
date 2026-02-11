import { getArtistInfo, getArtistAlbums } from './modal-api';
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
      getArtistInfo(artistId),
      getArtistAlbums(artistId),
    ]);
    
    openArtistModal(artist, albums);
  } catch (error) {
    // console.warn(error);
    validInput({
      title: 'Помилка',
      message: 'Не вдалося завантажити інформацію про артиста',
    });
  }
}

export function formatDuration(ms) {
  if (!ms || isNaN(ms)) return '-';

  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}