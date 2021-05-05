//МАССИВ

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

//ПЕРЕМЕННЫЕ

//Переменные для Popup Profile Edit

const popupProfileEdit = document.querySelector('.popup_type_edit');
const openPopupProfileEdit = document.querySelector('.profile__edit-button');
const closePopupProfileEdit = popupProfileEdit.querySelector('.popup__close-icon');
const popupName = popupProfileEdit.querySelector('.popup__input_type_name');
const popupProfession = popupProfileEdit.querySelector('.popup__input_type_profession');
const formPopupProfileEdit = popupProfileEdit.querySelector('.popup__form');

//Переменные для Profile

const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');

//Переменные для Popup Add Place

const popupAddPlace = document.querySelector('.popup_type_add');
const openPopupAddPlace = document.querySelector('.profile__add-button');
const closePopupAddPlace = popupAddPlace.querySelector('.popup__close-icon');
const popupTitle = popupAddPlace.querySelector('.popup__input_type_title');
const popupLink = popupAddPlace.querySelector('.popup__input_type_link');
const formPopupAddPlace = popupAddPlace.querySelector('.popup__form');

//Переменные для Popup View

const popupView = document.querySelector('.popup_type_view');
const closePopupView = popupView.querySelector('.popup__close-icon');
const popupPlacePhoto = popupView.querySelector('.popup__place-photo');
const popupPlaceTitle = popupView.querySelector('.popup__place-title');

//Переменные для Place Template

const placeTemplate = document.querySelector('#place-template').content;

//Переменные для Elements

const elementsList = document.querySelector('.elements__list');


//ФУНКЦИИ

//Добавить/удалить класс открытия для всех popup

function addPopupClass(popup) {
    popup.classList.toggle('popup_opened');
}

//Открыть Popup Profile Edit и заполнить текущими значениями полей Profile

function openPopupEdit() {
    addPopupClass(popupProfileEdit);
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
    addPopupClass(popupProfileEdit);
}

//Открыть Popup Add Place без сохранения ранее введенных значений в поля формы

function openPopupPlace() {
    addPopupClass(popupAddPlace);
    formPopupAddPlace.reset();
}

//Открыть Popup View

function openPopupView() {
    addPopupClass(popupView);
};

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

    likeButton.addEventListener('click', likePlace);
    deleteButton.addEventListener('click', removePlace);
    
    placePhoto.addEventListener('click', function () { 
        openPopupView();
        popupPlacePhoto.src = placePhoto.src;
        popupPlaceTitle.textContent = placeTitle.textContent;
    });
    
    return newPlace;
};

//Вывести массив карточек на страницу

initialCards.forEach(function(item) {
    const newCard = createPlace(item.name, item.link);
    elementsList.prepend(newCard);
});

//Добавить карточку места на страницу через Popup Add Place

function addPlace(evt) {
    evt.preventDefault();
    const newCard = createPlace(popupTitle.value, popupLink.value);
    elementsList.prepend(newCard);
    openPopupPlace();
};


//СЛУШАТЕЛИ

//Открыть Popup Profile Edit и заполнить текущими значениями полей Profile

openPopupProfileEdit.addEventListener('click', openPopupEdit);

//Закрыть Popup Profile Edit

closePopupProfileEdit.addEventListener('click', openPopupEdit);

//Сохранить отредактированные данные и закрыть Popup Profile Edit

formPopupProfileEdit.addEventListener('submit', editProfile);

//Открыть Popup Add Place без сохранения ранее введенных значений в поля формы

openPopupAddPlace.addEventListener('click', openPopupPlace);

//Закрыть Popup Add Place

closePopupAddPlace.addEventListener('click', openPopupPlace);

//Добавить карточку на страницу и закрыть Popup Add Place

formPopupAddPlace.addEventListener('submit', addPlace);

//Закрытие Popup View

closePopupView.addEventListener('click', openPopupView);