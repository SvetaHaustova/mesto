//ПЕРЕМЕННЫЕ

//Переменные для Popup Profile Edit

const popupProfileEdit = document.querySelector('.popup_type_edit');
const openPopupProfileEdit = document.querySelector('.profile__edit-button');
const popupName = popupProfileEdit.querySelector('.popup__input_type_name');
const popupProfession = popupProfileEdit.querySelector('.popup__input_type_profession');
const formPopupProfileEdit = popupProfileEdit.querySelector('.popup__form');

//Переменные для Profile

const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');

//Переменные для Popup Add Place

const popupAddPlace = document.querySelector('.popup_type_add');
const openPopupAddPlace = document.querySelector('.profile__add-button');
const popupTitle = popupAddPlace.querySelector('.popup__input_type_title');
const popupLink = popupAddPlace.querySelector('.popup__input_type_link');
const formPopupAddPlace = popupAddPlace.querySelector('.popup__form');

//Переменные для Popup View

const popupView = document.querySelector('.popup_type_view');
const popupPlacePhoto = popupView.querySelector('.popup__place-photo');
const popupPlaceTitle = popupView.querySelector('.popup__place-title');

//Переменные для Place Template

const placeTemplate = document.querySelector('#place-template').content;

//Переменные для Elements

const elementsList = document.querySelector('.elements__list');

//Переменные для всех Popup

const popups = document.querySelectorAll('.popup');

//ФУНКЦИИ

//Вывести массив карточек на страницу

initialCards.forEach(function(item) {
    const newCard = createPlace(item.name, item.link);
    elementsList.prepend(newCard);
});

//Закрыть Popup через кнопку Escape

function closeByEscape(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    } 
}

//Открыть Popup и добавить обработчик закрытия через Escape

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEscape);
}

//Закрыть Popup и удалить обработчик закрытия через Escape

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEscape);
}

//Открыть Popup Profile Edit и заполнить текущими значениями полей Profile

function openPopupEdit() {
    openPopup(popupProfileEdit);
    if (popupProfileEdit.classList.contains('popup_opened')) {
        popupName.value = profileName.textContent;
        popupProfession.value = profileProfession.textContent;
    }
}

//Сохранить отредактированные данные и закрыть Popup Profile Edit

function editProfile(evt) {
    evt.preventDefault();
    profileName.textContent = popupName.value;
    profileProfession.textContent = popupProfession.value;
    closePopup(popupProfileEdit);
}

//Открыть Popup Add Place без сохранения ранее введенных значений в поля формы и деактивировать кнопку Сохранить

function openPopupPlace() {
    openPopup(popupAddPlace);
    formPopupAddPlace.reset();
    const buttonElement = popupAddPlace.querySelector(config.submitButtonSelector);
    const inputList = Array.from(popupAddPlace.querySelectorAll(config.inputSelector));
    toggleButtonState(inputList, buttonElement, config);
}

//Лайкнуть фото места

function likePlace(evt) {
    evt.target.classList.toggle('place__like_active');
}

//Удалить карточку места

function removePlace(evt) {
    evt.target.closest('.place').remove();
}

//Создать карточку места

function createPlace(name, link) {
    const newPlace = placeTemplate.querySelector('.place').cloneNode(true);
    const placeTitle = newPlace.querySelector('.place__title');
    const placePhoto = newPlace.querySelector('.place__photo');
    const likeButton = newPlace.querySelector('.place__like');
    const deleteButton = newPlace.querySelector('.place__delete-button');

    placeTitle.textContent = name;
    placePhoto.src = link;
    placePhoto.alt = name;

    likeButton.addEventListener('click', likePlace);
    deleteButton.addEventListener('click', removePlace);
    
    placePhoto.addEventListener('click', function () { 
        openPopup(popupView);
        popupPlacePhoto.src = placePhoto.src;
        popupPlacePhoto.alt = placePhoto.alt;
        popupPlaceTitle.textContent = placeTitle.textContent;
    });
    
    return newPlace;
}

//Добавить карточку места на страницу через Popup Add Place

function addPlace(evt) {
    evt.preventDefault();
    const newCard = createPlace(popupTitle.value, popupLink.value);
    elementsList.prepend(newCard);
    closePopup(popupAddPlace);
}

//Закрыть все Popup через close-icon или overlay

popups.forEach(function(popup) {
    popup.addEventListener('click', (evt) => {
        if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__close-icon')) {
            closePopup(popup);
        }
    });
});


//СЛУШАТЕЛИ

//Открыть Popup Profile Edit и заполнить текущими значениями полей Profile

openPopupProfileEdit.addEventListener('click', openPopupEdit);

//Сохранить отредактированные данные и закрыть Popup Profile Edit

formPopupProfileEdit.addEventListener('submit', editProfile);

//Открыть Popup Add Place без сохранения ранее введенных значений в поля формы

openPopupAddPlace.addEventListener('click', openPopupPlace);

//Добавить карточку на страницу и закрыть Popup Add Place

formPopupAddPlace.addEventListener('submit', addPlace);