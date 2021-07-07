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
const profileName = document.querySelector(config.profileNameSelector);
const profileProfession = document.querySelector(config.profileProfessionSelector);
const profileAvatar = document.querySelector(config.profileAvatarSelector);
const popupAvatar = document.querySelector('.popup__input_type_avatar');
const buttonOpenPopupAvatarEdit = document.querySelector('.profile__avatar-edit');
const userId = 'a7473b4e-4df8-4060-a905-03a96de8bd8c';

//ФУНКЦИИ

//Создать API

const api = new Api({
    url: 'https://nomoreparties.co/v1/cohort-25',
    headers: {
        authorization: 'a7473b4e-4df8-4060-a905-03a96de8bd8c',
        'Content-Type': 'application/json'
    }
});

//Получить данные пользователя с сервера !!!Ошибка .name!!!

api.getUserInfo()
.then((users) => {
    profileName.textContent = users.name;
    profileProfession.textContent = users.about;
    profileAvatar.src = users.avatar;
})

//Создать карточку ????

function createCard(data) {
    const newCard = new Card(data, '#place-template', userId, handleCardClick, handleLikeClick, handleDeleteClick);
    const cardElement = newCard.generateCard();
    return cardElement;
}

//Вывести массив карточек на страницу?????

const cardList = new Section({
    items: data, // !!!Ошибка!!!
    renderer: (item) => {
        const cardElement = createCard(item);
        cardList.addItem(cardElement);
    }
}, '.elements__list');

api.getInitialCards()
.then(() => {
    cardList.renderer()
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
    validFormPopupEditAvatar.resetErrorElement(); //вопрос как сделать правильный текст для ошибки или его не делать
}

//Сохранить отредактированные данные и закрыть Popup Profile Edit
//Добавить Api !!!!!! ????

function submitFormPopupProfileEdit(userInfoList) {
    userInfo.setUserInfo(userInfoList);
    popupProfileEdit.closePopup();
}

//Добавить карточку места на страницу через Popup Add Place
//Добавить Api !!!!!! ????

function submitFormPopupAddPlace(data) {
    const cardElement = createCard(data);
    cardList.addItem(cardElement);
    popupAddPlace.closePopup();
}

//Сохранить новую аватарку и закрыть Popup Avatar Edit
//Работает ли ???

function submitFormPopupEditAvatar() {
    profileAvatar.src = popupAvatar.value;
    popupAvatarEdit.waitSubmitButton(true);
    api.editAvatarUser(popupAvatar.value)
    .finally(() => {
        popupAvatarEdit.closePopup();
        popupAvatarEdit.waitSubmitButton(false);
    })
}

//Удалить карточку места через Popup Confirm

function submitPopupConfirm (cardElement) {
    popupConfirm.waitSubmitButton(true);
    api.deleteCard(cardElement._id)
    .then(() => {
        cardElement.removeCard();
    })
    .finally(() => {
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

//Открыть Popup Confirm

function handleDeleteClick(cardElement) {
    popupConfirm.openPopup(cardElement);
}

//Определить, поставить лайк карточке или нет !!! Правильно ли????

function handleLikeClick(cardElement) {
    if (cardElement.likedCard()) {
        api.deleteLikeCard(cardElement._id)
        .then((data) => {
            cardElement.renderLikes(data)
        })
    } else {
        api.likeCard(cardElement._id)
        .then((data) => {
            cardElement.renderLikes(data)
        })
    }
}

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