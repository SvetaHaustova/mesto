import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
    constructor(popupSelector) { 
        super(popupSelector);
    }

    openPopup(cardElement) {
        super.openPopup();
        const popupPlacePhoto = this._popup.querySelector('.popup__place-photo');
        const popupPlaceTitle = this._popup.querySelector('.popup__place-title');
        
        const placePhoto = cardElement.querySelector('.place__photo');
        const placeTitle = cardElement.querySelector('.place__title');


        popupPlacePhoto.src = placePhoto.src;
        popupPlacePhoto.alt = placePhoto.alt;
        popupPlaceTitle.textContent = placeTitle.textContent;
    }
}