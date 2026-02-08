import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'css-star-rating/css/star-rating.min.css';

function fillStars() {
  const FILL_COLOR = '#764191';
  const NORM_COLOR = '#FFFFFF';
  const starRating = document.querySelectorAll('.star-rating');

  starRating.forEach(ratingEl => {
    const rating = Number(ratingEl.dataset.rating) || 0;
    const stars = ratingEl.querySelectorAll('.star-rating__star');
    stars.forEach((star, i) => {
      star.style.backgroundColor = i < rating ? FILL_COLOR : NORM_COLOR;
    });
  });
}

export function startSwiper() {
  new Swiper('.feedback-swiper', option);
}

const option = {
  modules: [Navigation, Pagination],
  loop: false,
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    bulletClass: 'custom-bullet',
    bulletActiveClass: 'custom-bullet-active',
    renderBullet(index, className) {
      if (index > 2) return '';
      return `<span class="${className}"></span>`;
    },
  },
  on: {
    init() {
      updatePagination(this);
      fillStars();
    },
    slideChange() {
      updatePagination(this);
    },
  },
};

function updatePagination(elem) {
  const total = elem.slides.length;
  const currentIndex = elem.activeIndex;
  const bullets = document.querySelectorAll('.custom-bullet');
  if (!bullets.length || total === 0) return;
  let currentGroup;
  if (currentIndex === 0) {
    currentGroup = 0;
  } else if (currentIndex === total - 1) {
    currentGroup = 2;
  } else {
    currentGroup = 1;
  }

  bullets.forEach((bullet, index) =>
    bullet.classList.toggle('custom-bullet-active', index === currentGroup)
  );
}
