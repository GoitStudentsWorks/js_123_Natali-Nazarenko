import { startSwiper } from './library-feedback';
import { fetchFeedbacks } from '../sound-wave-api';
import { createFeedbackMarkup } from './render-feedback';

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
