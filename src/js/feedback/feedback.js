import { startSwiper } from './library-feedback';
import { fetchFeedbacks } from '../sound-wave-api';

const listElem = document.querySelector('#feedback-list');

async function initFeedback() {
  if (!listElem) return;
  const feedbacks = await fetchFeedbacks();
  if (!Array.isArray(feedbacks) || feedbacks.length === 0) return;
  listElem.innerHTML = feedbacks
    .map(
      feedback =>
        `<div class="swiper-slide">${createFeedbackMarkup(feedback)}</div>`
    )
    .join('');

  startSwiper();
}

window.addEventListener('DOMContentLoaded', () => {
  initFeedback();
});

// тимчасовий рендер=============================================
function createFeedbackMarkup({ rating, descr, name }) {
  const ratingRound = Math.round(rating);

  return `
    <div class="feedback-card">
      <div class="star-rating star-rating--sm" data-rating="${ratingRound}">
        ${'<span class="star-rating__star"></span>'.repeat(5)}
      </div>
      <p class="feedback-text">${descr}</p>
      <p class="feedback-author">${name}</p>
    </div>
  `;
}
