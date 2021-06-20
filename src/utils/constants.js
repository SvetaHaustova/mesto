export const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    profileNameSelector: '.profile__name',
    profileProfessionSelector: '.profile__profession',
    inactiveButtonClass: 'popup__save-button_inactive',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active',
};

//ПЕРЕМЕННЫЕ

//Переменные для Popup Profile Edit

export const popupProfileEdit = document.querySelector('.popup_type_edit');
export const buttonOpenPopupProfileEdit = document.querySelector('.profile__edit-button');
export const popupName = popupProfileEdit.querySelector('.popup__input_type_name');
export const popupProfession = popupProfileEdit.querySelector('.popup__input_type_profession');

//Переменные для Popup Add Place

export const popupAddPlace = document.querySelector('.popup_type_add');
export const buttonOpenPopupAddPlace = document.querySelector('.profile__add-button');
