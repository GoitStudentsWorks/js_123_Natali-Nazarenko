export function createFeedbackMarkup({ rating, descr, name }) {
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
