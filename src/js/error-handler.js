//обробники помилок при запитах на сервер
import iziToast from "izitoast";

const errorText = {
    endLoad: {
        title: '!',
        message: `We're sorry, but you've reached the end of search results.`
    },
    network: {
        title: 'WARNING!',
        message: ''
    }
}

export function validInput({ title, message}) {
        iziToast.show({
            title,
            titleColor: 'red',
            message,
            position: 'topCenter',
            messageColor: 'red',
            color: 'red',
    });
}

export function infoMessage({ title, message }) {
    iziToast.show({
            title,
            titleColor: 'blue',
            message,
            position: 'topCenter',
            messageColor: 'blue',
            color: 'blue',
    });
}
