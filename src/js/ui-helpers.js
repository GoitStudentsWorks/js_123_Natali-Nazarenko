//функції, відповідальні за логіку show/hide loader, show/hide loadMoreButton

export const btnLoad = document.querySelector('.btn-load-more');
const loader = document.querySelector('.loader');

export function showLoader() {
    loader.classList.remove('hidden');
}

export function hideLoader() {
    loader.classList.add('hidden');
}

export function showLoadMoreButton() { 
    btnLoad.classList.remove('hidden');
}

export function hideLoadMoreButton() {
    btnLoad.classList.add('hidden');
}
