import './index.css';

import { 
    config,
    //popupProfileEdit,
    buttonOpenPopupProfileEdit,
    popupName,
    popupProfession,
    //popupAddPlace,
    formPopupProfileEdit,
    formPopupAddPlace,
    buttonOpenPopupAddPlace
} from '../utils/constants.js';
//import { initialCards } from '../utils/initialCards.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { UserInfo } from '../components/UserInfo.js';
import { Section } from '../components/Section.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupConfirm } from '../components/PopupConfirm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
//import { Popup } from '../components/Popup';
import { Api } from '../components/Api.js';

const formPopupAvatarEdit = document.querySelector('.popup__form_type_avatar');
//const profileName = document.querySelector(config.profileNameSelector);
//const profileProfession = document.querySelector(config.profileProfessionSelector);
//const profileAvatar = document.querySelector(config.profileAvatarSelector);
const popupAvatar = document.querySelector('.popup__input_type_avatar');
const popupPlaceTitle = document.querySelector('.popup__input_type_title');
const popupPlaceLink = document.querySelector('.popup__input_type_link');
const buttonOpenPopupAvatarEdit = document.querySelector('.profile__avatar-edit');
let userId;

//ФУНКЦИИ

//Создать API

const api = new Api({
    url: 'https://nomoreparties.co/v1/cohort-25',
    headers: {
        authorization: 'a7473b4e-4df8-4060-a905-03a96de8bd8c',
        'Content-Type': 'application/json'
    }
});

//Получить данные пользователя с сервера

api.getUserInfo()
.then((res) => {
    //console.log(res);
    userId = res._id;
    userInfo.setUserInfo(res);
    userInfo.setAvatar(res);
})
.catch((err) => {
    console.log(err);
})

//Создать карточку

function createCard(data) {
    //const newCard = new Card(data, '#place-template', userId, handleCardClick, deleteLikeCard, likeCard, handleDeleteClick);
    const newCard = new Card(data, '#place-template', userId, handleCardClick, handleLikeClick, handleDeleteClick);
    const cardElement = newCard.generateCard();
    return cardElement;
}

//Вывести массив карточек на страницу

const cardList = new Section({
    renderer: (item) => {
        const cardElement = createCard(item);
        cardList.addItem(cardElement);
    }
}, '.elements__list');


api.getInitialCards()
.then((res) => {
    cardList.renderer(res)
})
.catch((err) => {
    console.log(err);
})

//Сформировать объект с данными пользователя

const userInfo = new UserInfo(config);

//Открыть Popup Profile Edit и заполнить текущими значениями полей Profile

function openPopupProfileEdit() {
    popupProfileEdit.openPopup();
    const userInfoList = userInfo.getUserInfo();
    popupName.value = userInfoList.name;
    popupProfession.value = userInfoList.profession;
    validFormPopupProfileEdit.resetErrorElement();
}

//Открыть Popup Add Place без сохранения ранее введенных значений в поля формы и деактивировать кнопку Сохранить

function openPopupAddPlace() {
    popupAddPlace.openPopup();
    validFormPopupAddPlace.toggleButtonState();
    validFormPopupAddPlace.resetErrorElement();
}

//Открыть Popup Avatar Edit

function openPopupEditAvatar() {
    popupAvatarEdit.openPopup();
    validFormPopupEditAvatar.toggleButtonState();
    validFormPopupEditAvatar.resetErrorElement();
}

//Сохранить отредактированные данные и закрыть Popup Profile Edit

function submitFormPopupProfileEdit() {
    popupProfileEdit.waitSubmitButton(true);
    api.editUserInfo(popupName.value, popupProfession.value)
    .then((res) => {
        userInfo.setUserInfo(res);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        popupProfileEdit.closePopup();
        popupProfileEdit.waitSubmitButton(false);
    })
}

//Добавить карточку места на страницу через Popup Add Place

function submitFormPopupAddPlace() {
    popupAddPlace.waitSubmitButton(true);
    api.addNewCard(popupPlaceTitle.value, popupPlaceLink.value)
    .then((res) => {
        const cardElement = createCard(res);
        cardList.addItem(cardElement);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        popupAddPlace.closePopup();
        popupAddPlace.waitSubmitButton(false);
    })
}

//Сохранить новую аватарку и закрыть Popup Avatar Edit

function submitFormPopupEditAvatar() {
    popupAvatarEdit.waitSubmitButton(true);
    api.editAvatarUser(popupAvatar.value)
    .then((res) => {
        userInfo.setAvatar(res);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        popupAvatarEdit.closePopup();
        popupAvatarEdit.waitSubmitButton(false);
    })
}

//Удалить карточку места через Popup Confirm

function submitPopupConfirm (cardElement) {
    popupConfirm.waitSubmitButton(true);
    api.deleteCard(cardElement._id)
    .then((res) => {
        cardElement.removeCard(res);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        popupConfirm.closePopup();
        popupConfirm.waitSubmitButton(false);
    })
}

//Создать Popups со слушателями

const popupProfileEdit = new PopupWithForm(submitFormPopupProfileEdit, '.popup_type_edit');
popupProfileEdit.setEventListeners();

const popupAddPlace = new PopupWithForm(submitFormPopupAddPlace, '.popup_type_add');
popupAddPlace.setEventListeners();

const popupAvatarEdit = new PopupWithForm(submitFormPopupEditAvatar, '.popup_type_avatar');
popupAvatarEdit.setEventListeners();

const popupImage = new PopupWithImage('.popup_type_view');
popupImage.setEventListeners();

const popupConfirm = new PopupConfirm(submitPopupConfirm, '.popup_type_confirm');
popupConfirm.setEventListeners();

//Открыть Popup Image

function handleCardClick(cardElement) {
    popupImage.openPopup(cardElement);
}

//Открыть Popup Confirm ???

function handleDeleteClick(cardElement) {
    popupConfirm.openPopup(cardElement);
}

//Определить, поставить лайк карточке или нет ????

function handleLikeClick(cardElement) {
    if (cardElement.likedCard()) {
        api.addLikeCard(cardElement._id)
        .then((res) => {
            console.log(res)
            //cardElement.handleLikeCard(res)
        })
        .catch((err) => {
            console.log(err);
        })
    } else {
        api.deleteLikeCard(cardElement._id)
        .then((res) => {
            //console.log(res)
            cardElement.handleLikeCard(res)
        })
        .catch((err) => {
            console.log(err);
        })
    }
}

// //const deleteLikeCard = (id, cardElement) => {
// const deleteLikeCard = (cardElement) => {
//     api.deleteLikeCard(cardElement)
//     .then((res) => {
//         //console.log(res)
//         return res;
//         //cardElement.renderLikes(res)
//     })
// }

// //const addLikeCard = (id, cardElement) => {
// const addLikeCard = (cardElement) => {
//     console.log(cardElement)
//     api.addLikeCard(cardElement)
//     .then((res) => {
//     //    console.log(res)
//         return res;
//         //cardElement.renderLikes(res)
//     })
// }

//Провести валидацию форм Popup Profile Edit, Popup Add Place, Popup Avatar Edit

const validFormPopupProfileEdit = new FormValidator(config, formPopupProfileEdit);
validFormPopupProfileEdit.enableValidation();

const validFormPopupAddPlace = new FormValidator(config, formPopupAddPlace);
validFormPopupAddPlace.enableValidation();

const validFormPopupEditAvatar = new FormValidator(config, formPopupAvatarEdit);
validFormPopupEditAvatar.enableValidation();


//СЛУШАТЕЛИ

//Открыть Popup Profile Edit и заполнить текущими значениями полей Profile

buttonOpenPopupProfileEdit.addEventListener('click', openPopupProfileEdit);

//Открыть Popup Add Place без сохранения ранее введенных значений в поля формы

buttonOpenPopupAddPlace.addEventListener('click', openPopupAddPlace);

//Открыть Popup Avatar Edit

buttonOpenPopupAvatarEdit.addEventListener('click', openPopupEditAvatar);