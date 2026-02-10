// const modalRoot = document.querySelector('[data-modal-wrapper]');

export function createArtistModalMarkup(artist, albums = []) {
  if (!Array.isArray(albums)) {
    console.error('Albums is not array:', albums);
    albums = [];
  }

  return `
  <div class="modal-close-btn" data-closeBtn>
       </div>
       <h3 class="modal-title artist-name">
         ${artist.strArtist}
       </h3>
       <div class="modal-section artist-info-section">
         <div class="artist-img">
           <img src="${artist.strArtistThumb}" alt="${artist.strArtist}">
         </div>
         <div class="artist-info">
           <ul class="artist-info-list">
             <li class="artist-info-item">
               <p class="artist-info-name">Years active</p>
               <span class="artist-info-descr">${artist.intFormedYear}-present</span>
             </li>
             <li class="artist-info-item">
               <p class="artist-info-name">Sex</p>
               <span class="artist-info-descr">${artist.strGender}</span>
             </li>
             <li class="artist-info-item">
               <p class="artist-info-name">Members</p>
               <span class="artist-info-descr">${artist.intMembers}</span>
             </li>
             <li class="artist-info-item">
               <p class="artist-info-name">Country</p>
               <span class="artist-info-descr">${artist.strCountry}</span>
             </li>
             <li class="artist-info-item" data-artist-bio>
               <p class="artist-info-name">Biography</p>
               <p class="artist-info-descr">
                  ${artist.strBiographyEN || 'No biography available'}
                </p>
                <a class="see-more visually-hidden" role="button">
                  …  <span> See all</span>
                </a>
                <a class="see-less visually-hidden" role="button">
                  <span> See less</span>
                </a>
             </li>
             <li class="artist-info-item artist-info-style">
             ${genres.map(genre => `<span class="artist-style">${genre}</span>`).join('')}
             </li>
           </ul>
         </div>
       </div>
       <div class="modal-section artist-album-section">
         <h5 class="modal-title artist-album-title">Albums</h5>
         <div class="artist-album-list">
         ${
              albums.length
             ? albums.map(album => `
           <div class="artist-album-item">
             <table>
               <caption>
                 ${album.strAlbum}
               </caption>
               <tr>
                 <th scope="col">Track</th>
                 <th scope="col">Time</th>
                 <th scope="col">Link</th>
               </tr>
               ${tracks.length
             ? tracks.map(track => `
               <tr>
                 <td scope="row">Rip Me Apart${track.strTrack}</td>
                 <td>3:02${track.intDuration}</td>
                 <td>
                 ${(track.movie) => `
                  <a class="artist-song-link chosen" href="${track.movie}" target="_blank">
                    <svg class="youtube-icon" width="24" height="24">
                      <use href="../img/sprite-white.svg#Youtube"></use>
                    </svg>
                  </a>
                  `}
                 </td>
               </tr >
               `).join('')}
                             
             </table>
           </div>  
           `
           ).join('')
             : '<li>No albums found</li>'}
           
         </div>
       </div> 
       `;
}