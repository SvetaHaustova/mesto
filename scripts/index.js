let openPopupProfileEdit = document.querySelector('.profile__edit-button');
let popupProfileEdit = document.querySelector('.popup');
let closePopupProfileEdit = document.querySelector('.popup__close-icon');

let profileName = document.querySelector('.profile__name');
let profileProfession = document.querySelector('.profile__profession');

let popupFieldName = document.querySelector('.popup__field-name');
let popupFieldProfession = document.querySelector('.popup__field-profession');

let formPopupProfileEdit = document.querySelector('.popup__form');

function openPopupEdit() {
    popupProfileEdit.classList.toggle('popup_opened');
    popupFieldName.value = profileName.textContent;
    popupFieldProfession.value = profileProfession.textContent;
}

function formSubmitPopupProfileEdit (evt) {
    evt.preventDefault(); 
    profileName.textContent = popupFieldName.value;
    profileProfession.textContent = popupFieldProfession.value;
    popupProfileEdit.classList.remove('popup_opened');
}

openPopupProfileEdit.addEventListener('click', openPopupEdit);
closePopupProfileEdit.addEventListener('click', openPopupEdit);

formPopupProfileEdit.addEventListener('submit', formSubmitPopupProfileEdit);
