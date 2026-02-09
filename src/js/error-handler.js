//обробники помилок при запитах на сервер
import iziToast from "izitoast";

const errorText = {
    endLoad: {
        title: '!',
        message: `We're sorry, but you've reached the end of search results.` //коли закінчилися artists
    },
    network: {
        title: 'WARNING!',
        message: ''             //повідомлення від сервера
    }
}

//сповіщення красне для повідомлень від сервера

export function validInput({ title, message}) {
        iziToast.show({
            title,
            titleColor: 'red',
            message,
            position: 'topCenter',
            messageColor: 'black',
            color: 'red',
    });
}

//сповіщення сині для повідомлень про кінеці галереї

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

// приклад обробки помилки
//      }catch (error) {
//        errorText.network.message = error.message;
//        validInput(errorText.network);
//      }finally {
//        hideLoader(); 
//      }