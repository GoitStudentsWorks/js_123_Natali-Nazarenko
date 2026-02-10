const gallery = document.querySelector('.art-gallery');

export function renderArtistsGallery(data) {
    const markup = data.map(({ genres, strArtist, strBiographyEN, strArtistThumb }) => `
        <li class='artist-card'>
            <img class='art-photo' src="${strArtistThumb}"
            alt="${strArtist}"
            width="640" height="393">
            <ul class="genres-list">
                ${genres.map(genre => `<li class="genre">${genre}</li>`).join('')}
            </ul>
            <h3 class='artist-name'>${strArtist}</h3>
            <p class='artist-bio'>${strBiographyEN}</p>
            <button class='learn-more-btn' type="button"><span class='btn-text'>Learn More</span>
            <svg class="right-triangle" width="24" height="24">
            <use href="../img/sprite-white.svg#right-triangle-full"></use>
            </svg>
            </button>
        </li>
    `).join('');

    gallery.insertAdjacentHTML('beforeend', markup);
}