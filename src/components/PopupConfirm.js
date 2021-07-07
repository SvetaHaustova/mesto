import { Popup } from './Popup.js';

export class PopupConfirm extends Popup {
    constructor(handleCardDelete, popupSelector) {
        super(popupSelector);
        this._handleCardDelete = handleCardDelete;
    }
    
    setEventListeners() {
        this._popupDeleteYesButton = this._popup.querySelector('.popup__yes-button');
        this._popupDeleteYesButton.addEventListener('submit', (evt, cardElement) => {
            evt.preventDefault();
            this._handleCardDelete(cardElement);
        });
    }

    waitSubmitButton(isLoading) {
        this._popupDeleteYesButtonTextDefault = this._popupDeleteYesButton.value;
        if (isLoading) {
            this._popupDeleteYesButton.value = 'Удаление...';
        } else {
            this._closePopup();
            this._popupDeleteYesButton.value = this._popupSubmitButtonTextDefault;
        }
    }
}