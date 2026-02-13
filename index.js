import{a as d,i as y,S as C,N as q,P as B}from"./assets/vendor-DZ0UcJnz.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();const v="https://sound-wave.b.goit.study/api";async function L(t){const{data:e}=await d.get(`${v}/artists`,{params:{page:t,limit:8}});return e}async function N(){const{data:{data:t}}=await d.get(`${v}/feedbacks`,{params:{limit:10}});return Array.isArray(t)?t:[]}const F=document.querySelector(".art-gallery");function w(t){const e=t.map(({genres:o,strArtist:a,strBiographyEN:s,strArtistThumb:n,_id:i})=>`
        <li class='artist-card'>
            <img class='art-photo' src="${n}"
            alt="${a}"
            width="640" height="393">
            <ul class="genres-list">
                ${o.map(u=>`<li class="genre">${u}</li>`).join("")}
            </ul>
            <h3 class='artist-name'>${a}</h3>
            <p class='artist-bio'>${s}</p>
            <button class='learn-more-btn' type="button" data-artist-id="${i}"><span class='btn-text'>Learn More</span>
            <svg class="right-triangle" width="24" height="24">
            <use href="img/sprite-white.svg#right-triangle-full"></use>
            </svg>
            </button>
        </li>
    `).join("");F.insertAdjacentHTML("beforeend",e)}function l({title:t,message:e}){y.show({title:t,titleColor:"red",message:e,position:"topCenter",messageColor:"red",color:"red"})}function O({title:t,message:e}){y.show({title:t,titleColor:"blue",message:e,position:"topCenter",messageColor:"blue",color:"blue"})}const $=document.querySelector(".btn-load-more"),k=document.querySelector(".loader");function S(){k.classList.remove("hidden")}function A(){k.classList.add("hidden")}function M(){$.classList.remove("hidden")}function g(){$.classList.add("hidden")}let c=1;const R=8;async function P(){try{S();const t=await L(c);t.artists.length===0&&l({title:"Помилка",message:"Не вдалося завантажити дані"}),w(t.artists),M()}catch{l({title:"Помилка",message:"Не вдалося завантажити дані"})}finally{A()}}P();const T=document.querySelector(".btn-load-more");T.addEventListener("click",_);async function _(){g(),S(),c+=1;try{const t=await L(c);w(t.artists);const e=document.querySelector(".artist-card"),{height:o}=e.getBoundingClientRect();if(window.scrollBy({top:o,behavior:"smooth"}),c*R>=t.totalArtists){g(),O({title:"Кінець колекції",message:"Ви досягнули кінця колекції"});return}M()}catch{l({title:"Помилка",message:"Не вдалося завантажити дані"})}finally{A()}}function x(){const t="#764191",e="#FFFFFF";document.querySelectorAll(".star-rating").forEach(a=>{const s=Number(a.dataset.rating)||0;a.querySelectorAll(".star-rating__star").forEach((i,u)=>{i.style.backgroundColor=u<s?t:e})})}function I(){new C(".feedback-swiper",j)}const j={modules:[q,B],loop:!1,slidesPerView:1,spaceBetween:20,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,bulletClass:"custom-bullet",bulletActiveClass:"custom-bullet-active",renderBullet(t,e){return t>2?"":`<span class="${e}"></span>`}},on:{init(){h(this),x()},slideChange(){h(this)}}};function h(t){const e=t.slides.length,o=t.activeIndex,a=document.querySelectorAll(".custom-bullet");if(!a.length||e===0)return;let s;o===0?s=0:o===e-1?s=2:s=1,a.forEach((n,i)=>n.classList.toggle("custom-bullet-active",i===s))}function H({rating:t,descr:e,name:o}){return`
    <div class="feedback-card">
      <div class="star-rating star-rating--sm" data-rating="${Math.round(t)}">
        ${'<span class="star-rating__star"></span>'.repeat(5)}
      </div>
      <p class="feedback-text">${e}</p>
      <p class="feedback-author">${o}</p>
    </div>
  `}const b=document.querySelector("#feedback-list");async function D(){if(!b)return;const t=await N();!Array.isArray(t)||t.length===0||(b.innerHTML=t.map(e=>`<div class="swiper-slide">${H(e)}</div>`).join(""),I())}window.addEventListener("DOMContentLoaded",()=>{D()});const m=document.querySelector("[data-menu]"),G=document.querySelector("[data-menu-open]"),Y=document.querySelector("[data-menu-close]"),U=document.querySelectorAll("[data-mob-nav]"),z=()=>{m.classList.remove("is-hidden"),document.body.classList.add("no-scroll")},f=()=>{m.classList.add("is-hidden"),document.body.classList.remove("no-scroll")};G.addEventListener("click",z);Y.addEventListener("click",f);U.forEach(t=>{t.addEventListener("click",()=>{f()})});document.addEventListener("keydown",t=>{t.key==="Escape"&&!m.classList.contains("is-hidden")&&f()});const E="https://sound-wave.b.goit.study/api";async function K(t){try{const{data:e}=await d.get(`${E}/artists/${t}`);return e}catch(e){console.log(e)}}async function V(t){try{const{data:e}=await d.get(`${E}/artists/${t}/albums`);return e.albumsList||[]}catch(e){console.log(e)}}const J=document.querySelector(".art-gallery");J.addEventListener("click",Q);async function Q(t){const e=t.target.closest(".learn-more-btn");if(!e)return;const o=e.dataset.artistId;try{tt();const[a,s]=await Promise.all([K(o),V(o)]);Z(a,s)}catch{l({title:"Помилка",message:"Не вдалося завантажити інформацію про артиста"})}}function W(t){if(!t||isNaN(t))return"-";const e=Math.floor(t/1e3),o=Math.floor(e/60),a=e%60;return`${o}:${a.toString().padStart(2,"0")}`}function X(t,e=[]){const{genres:o=[]}=t;return`
  <div class="modal-close-btn" data-close-btn>
       </div>
       <h3 class="modal-title artist-name">
         ${t.strArtist}
       </h3>
       <div class="modal-section artist-info-section">
         <div class="artist-img">
           <img src="${t.strArtistThumb}" alt="${t.strArtist}">
         </div>
         <div class="artist-info">
           <ul class="artist-info-list">
             <li class="artist-info-item">
               <p class="artist-info-name">Years active</p>
               <span class="artist-info-descr">${t.intFormedYear}-present</span>
             </li>
             <li class="artist-info-item">
               <p class="artist-info-name">Sex</p>
               <span class="artist-info-descr">${t.strGender}</span>
             </li>
             <li class="artist-info-item">
               <p class="artist-info-name">Members</p>
               <span class="artist-info-descr">${t.intMembers}</span>
             </li>
             <li class="artist-info-item">
               <p class="artist-info-name">Country</p>
               <span class="artist-info-descr">${t.strCountry}</span>
             </li>
             <li class="artist-info-item" data-artist-bio>
               <p class="artist-info-name">Biography</p>
               <p class="artist-info-descr">
                  ${t.strBiographyEN||"No biography available"}
                </p>
                <a class="see-more visually-hidden" role="button">
                  …  <span> See all</span>
                </a>
                <a class="see-less visually-hidden" role="button">
                  <span> See less</span>
                </a>
             </li>
             <li class="artist-info-item artist-info-style">
             ${o.map(a=>`<span class="artist-style">${a}</span>`).join("")}
             </li>
           </ul>
         </div>
       </div>
<div class="modal-section artist-album-section">
  <h5 class="modal-title artist-album-title">Albums</h5>
  <div class="artist-album-list">
    ${e.length?e.map(a=>{const s=Array.isArray(a.tracks)?a.tracks:[];return`
              <div class="artist-album-item">
                <table>
                  <caption>${a.strAlbum}</caption>
                  <tr>
                    <th scope="col">Track</th>
                    <th scope="col">Time</th>
                    <th scope="col">Link</th>
                  </tr>

                  ${s.length?s.map(n=>`
                          <tr>
                            <td scope="row">${n.strTrack||"-"}</td>
                            <td>${W(n.intDuration)||"-"}</td>
                            <td>
                              ${n.movie?`
                                    <a class="artist-song-link"
                                       href="${n.movie}"
                                       target="_blank">
                                      <svg class="youtube-icon" width="24" height="24">
                                        <use href="../img/sprite-white.svg#Youtube"></use>
                                      </svg>
                                    </a>
                                  `:""}
                            </td>
                          </tr>
                        `).join(""):`
                        <tr>
                          <td colspan="3">No tracks available</td>
                        </tr>
                      `}

                </table>
              </div>
            `}).join(""):"<p>No albums found</p>"}
  </div>
</div>
`}const r=document.querySelector("[data-modal]"),p=r.querySelector("[data-modal-wrapper]");function Z(t,e){p.innerHTML=X(t,e);const o=document.querySelector("[data-close-btn]");document.body.classList.add("modal-open"),r.classList.add("is-open");const a=()=>{document.body.classList.remove("modal-open"),r.classList.remove("is-open"),r.removeEventListener("click",n),window.removeEventListener("keydown",s),o.removeEventListener("click",a),p.innerHTML=""},s=i=>i.key==="Escape"&&a(),n=i=>i.target===r&&a();o.addEventListener("click",a),r.addEventListener("click",n),window.addEventListener("keydown",s)}function tt(){p.innerHTML=`
    <div class="modal-backdrop">
      <div class="modal">
        <p class="loader"></p>
      </div>
    </div>
  `}
//# sourceMappingURL=index.js.map
