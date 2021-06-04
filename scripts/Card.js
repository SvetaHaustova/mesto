//Импорт для открытия Popup View

import { openPopup } from './index.js';

//Переменные для Popup View

const popupView = document.querySelector('.popup_type_view');
const popupPlacePhoto = popupView.querySelector('.popup__place-photo');
const popupPlaceTitle = popupView.querySelector('.popup__place-title');

//Класс для создания карточки места

export class Card {
    constructor(name, link, cardSelector) {
        this._cardSelector = cardSelector;
        this._name = name;
        this._link = link;
    }

    _getTemplate() {
        const cardElement = document.querySelector(this._cardSelector).content.querySelector('.place').cloneNode(true);
        return cardElement;
    }
    
    generateCard() {
        this._element = this._getTemplate();
        this._placePhoto = this._element.querySelector('.place__photo');
        this._placeTitle = this._element.querySelector('.place__title');
        this._likeButton = this._element.querySelector('.place__like');
        this._deleteButton = this._element.querySelector('.place__delete-button');
        this._setEventListeners();

        this._placeTitle.textContent = this._name;
        this._placePhoto.src = this._link;
        this._placePhoto.alt = this._name;

        return this._element;
    }

    _likePlace() {
        this._likeButton.classList.toggle('place__like_active');
    }

    _removePlace() {
        this._element.closest('.place').remove();
    }

    _openPlace() {
        openPopup(popupView);
        popupPlacePhoto.src = this._link;
        popupPlacePhoto.alt = this._name;
        popupPlaceTitle.textContent = this._name;
    }

    _setEventListeners() {
        this._likeButton.addEventListener('click', () => {
            this._likePlace();
        });
        this._deleteButton.addEventListener('click', () => {
            this._removePlace();
        });
        this._placePhoto.addEventListener('click', () => {
            this._openPlace();
        });
        
    }
}