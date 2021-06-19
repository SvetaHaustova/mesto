import './index.css';

import { 
    config,
    popupProfileEdit,
    openPopupProfileEdit,
    popupName,
    popupProfession,
    popupAddPlace,
    openPopupAddPlace
} from '../utils/constants.js';
import { initialCards } from '../utils/initialCards.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { UserInfo } from '../components/UserInfo.js';
import { Section } from '../components/Section.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';


//ФУНКЦИИ

//Создать карточку

function createCard(data) {
    const newCard = new Card(data, '#place-template', handleCardClick);
    const cardElement = newCard.generateCard();
    return cardElement;
}

//Вывести массив карточек на страницу

const cardList = new Section({
    items: initialCards,
    renderer: (item) => {
        const cardElement = createCard(item);
        cardList.addItem(cardElement);
    }
}, '.elements__list');

cardList.renderer();

//Сформировать объект с данными пользователя

const userInfo = new UserInfo(config);

//Открыть Popup Profile Edit и заполнить текущими значениями полей Profile

function openPopupEdit() {
    popupEdit.openPopup();
    if (popupProfileEdit.classList.contains('popup_opened')) {
        const userInfoList = userInfo.getUserInfo();
        popupName.value = userInfoList.name;
        popupProfession.value = userInfoList.profession;
    }
    validFormPopupProfileEdit.resetErrorElement();
}

//Сохранить отредактированные данные и закрыть Popup Profile Edit

function editProfile(userInfoList) {
    userInfo.setUserInfo(userInfoList);
    popupEdit.closePopup();
}

//Открыть Popup Add Place без сохранения ранее введенных значений в поля формы и деактивировать кнопку Сохранить

function openPopupPlace() {
    popupAdd.openPopup();
    validFormPopupAddPlace.toggleButtonState();
    validFormPopupAddPlace.resetErrorElement();
}

//Добавить карточку места на страницу через Popup Add Place

function addPlace(data) {
    const cardElement = createCard(data);
    cardList.addItem(cardElement);
    popupAdd.closePopup();
}

//Создать Popups со слушателями

const popupEdit = new PopupWithForm(editProfile, '.popup_type_edit');
popupEdit.setEventListeners();

const popupAdd = new PopupWithForm(addPlace, '.popup_type_add');
popupAdd.setEventListeners();

const popupImage = new PopupWithImage('.popup_type_view');
popupImage.setEventListeners();

//Открыть Popup Image

function handleCardClick(cardElement) {
    popupImage.openPopup(cardElement);
}

//Провести валидацию форм Popup Profile Edit и Popup Add Place

const validFormPopupProfileEdit = new FormValidator(config, popupProfileEdit);
validFormPopupProfileEdit.enableValidation();

const validFormPopupAddPlace = new FormValidator(config, popupAddPlace);
validFormPopupAddPlace.enableValidation();


//СЛУШАТЕЛИ

//Открыть Popup Profile Edit и заполнить текущими значениями полей Profile

openPopupProfileEdit.addEventListener('click', openPopupEdit);

//Открыть Popup Add Place без сохранения ранее введенных значений в поля формы

openPopupAddPlace.addEventListener('click', openPopupPlace);
