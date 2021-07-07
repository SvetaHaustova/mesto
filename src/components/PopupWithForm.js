import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
    constructor(handleFormSubmit, popupSelector) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
    }

    _getInputValues() {
        this._inputList = this._popup.querySelectorAll('.popup__input');
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;    
        });
        return this._formValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupForm = this._popup.querySelector('.popup__form');
        this._popupForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
        })
    }

    closePopup() {
        super.closePopup();
        this._popupForm.reset();
    }

//Изменение текста кнопки Сохранить, пока идет загрузка данных

    waitSubmitButton(isLoading) {
        this._popupSubmitButton = this._popup.querySelector('.popup__save-button');
        this._popupSubmitButtonTextDefault = this._popupSubmitButton.value;
        if (isLoading) {
            this._popupSubmitButton.value = 'Сохранение...';
        } else {
            this._popupSubmitButton.value = this._popupSubmitButtonTextDefault;
        }
    }
}