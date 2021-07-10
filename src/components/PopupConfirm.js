import { Popup } from './Popup.js';

export class PopupConfirm extends Popup {
    constructor(handleCardDelete, popupSelector) {
        super(popupSelector);
        this._handleCardDelete = handleCardDelete;
    }

    openPopup(card) {
        super.openPopup();
        this.setEventListeners(card)
    }

    setEventListeners(card) {
        super.setEventListeners();
        this._popupDeleteYesButton = this._popup.querySelector('.popup__yes-button');
        this._popupDeleteYesButton.addEventListener('click', (evt) => {
            evt.preventDefault();
            this._handleCardDelete(card);
        });
    }

    waitSubmitButton(isLoading) {
        this._popupDeleteYesButtonTextDefault = this._popupDeleteYesButton.value;
        if (isLoading) {
            this._popupDeleteYesButton.value = 'Удаление...';
        } else {
            this._popupDeleteYesButton.value = this._popupSubmitButtonTextDefault;
        }
    }
}