import { getArtists } from "../sound-wave-api";
import { renderArtistsGallery } from "./render-artists";
import { validInput, infoMessage } from "../error-handler"
import { showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton } from "../ui-helpers"

let page = 1;
const perPage = 8;

try {
    showLoader();
    const data = await getArtists(page);

    if (data.artists.length === 0) {
        validInput({ title: 'Помилка', message: 'Не вдалося завантажити дані' });
    }

    renderArtistsGallery(data.artists);
    showLoadMoreButton();

} catch(error) {
    validInput({ title: 'Помилка', message: 'Не вдалося завантажити дані'});
} finally {
    hideLoader();
}

const fetchCardsBtn = document.querySelector('.btn-load-more');
fetchCardsBtn.addEventListener('click', handleClick);
async function handleClick() {
    hideLoadMoreButton();
    showLoader();
    page += 1;
    try {
        const newData = await getArtists(page);
        renderArtistsGallery(newData.artists);
        
        const card = document.querySelector('.artist-card');
        const { height } = card.getBoundingClientRect();
        window.scrollBy({
            top: height,
            behavior: 'smooth',
        });

        if (page * perPage >= newData.totalArtists) {
            hideLoadMoreButton();
            infoMessage({ title: 'Кінець колекції', message: 'Ви досягнули кінця колекції' });
            return;
        }
        showLoadMoreButton();
    } catch (error) {
        validInput({ title: 'Помилка', message: 'Не вдалося завантажити дані'});
    }finally {
        hideLoader();
    }
}

