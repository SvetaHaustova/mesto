//ПЕРЕМЕННЫЕ

//Переменные Popup Profile Edit

let popupProfileEdit = document.querySelector('.popup');
let openPopupProfileEdit = document.querySelector('.profile__edit-button');
let closePopupProfileEdit = document.querySelector('.popup__close-icon');
let popupName = document.querySelector('.popup__input_type_name');
let popupProfession = document.querySelector('.popup__input_type_profession');
let formPopupProfileEdit = document.querySelector('.popup__form');

//Переменные Profile

let profileName = document.querySelector('.profile__name');
let profileProfession = document.querySelector('.profile__profession');


//ФУНКЦИИ

//Добавить класс открытия для Popup

function addPopupClass() {
    popupProfileEdit.classList.toggle('popup_opened');
}

//Открыть Popup Profile Edit и занести текущие значения полей Profile в поля Popup Profile Edit

function openPopupEdit() {
    if (popupProfileEdit.classList.contains('popup_opened')) {
        popupName.value = profileName.textContent;
        popupProfession.value = profileProfession.textContent;
    } else {
        addPopupClass();
        openPopupEdit()
    }
}

//Закрыть Popup Profile Edit без сохранения данных

function closePopupEdit() {
    if (popupProfileEdit.classList.contains('popup_opened')) {
        addPopupClass();
    }
}

//Сохранить отредактированные данные и закрыть Popup Profile Edit

function editProfile(evt) {
    evt.preventDefault();
    profileName.textContent = popupName.value;
    profileProfession.textContent = popupProfession.value;
    closePopupEdit();
}


//СЛУШАТЕЛИ

//Открыть Popup Profile Edit

openPopupProfileEdit.addEventListener('click', openPopupEdit);

//Закрыть Popup Profile Edit

closePopupProfileEdit.addEventListener('click', closePopupEdit);

//Сохранить отредактированные данные и закрыть Popup Profile Edit

formPopupProfileEdit.addEventListener('submit', editProfile);
