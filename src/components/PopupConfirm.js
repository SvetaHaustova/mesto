import { Popup } from './Popup.js';

export class PopupConfirm extends Popup {
    constructor(handleCardDelete, popupSelector) {
        super(popupSelector);
        this._handleCardDelete = handleCardDelete;
        this._popupDeleteYesButton = this._popup.querySelector('.popup__yes-button');
        this._popupDeleteYesButtonTextDefault = this._popupDeleteYesButton.textContent;
    }



    openPopup(card) {
        super.openPopup();
        this._card = card;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupDeleteYesButton.addEventListener('click', (evt) => {
            evt.preventDefault();
            this._handleCardDelete(this._card);
        });
    }

    waitSubmitButton(isLoading) {
        if (isLoading) {
            this._popupDeleteYesButton.textContent = 'Удаление...';
        } else {
            this._popupDeleteYesButton.textContent = this._popupDeleteYesButtonTextDefault;
        }
    }
}
