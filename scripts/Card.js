//Переменные для Popup View

const popupView = document.querySelector('.popup_type_view');
const popupPlacePhoto = popupView.querySelector('.popup__place-photo');
const popupPlaceTitle = popupView.querySelector('.popup__place-title');

//Импорт для открытия Popup View

import { openPopup } from './index.js';

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
        this._setEventListeners();

        this._element.querySelector('.place__title').textContent = this._name;
        this._element.querySelector('.place__photo').src = this._link;
        this._element.querySelector('.place__photo').alt = this._name;

        return this._element;
    }

    _likePlace() {
        this._element.querySelector('.place__like').classList.toggle('place__like_active');
    }

    _removePlace() {
        this._element.closest('.place').remove();
    }

    _openPlace() {
        openPopup(popupView);
        popupPlacePhoto.src = this._element.querySelector('.place__photo').src;
        popupPlacePhoto.alt = this._element.querySelector('.place__photo').alt;
        popupPlaceTitle.textContent = this._element.querySelector('.place__title').textContent;
    }

    _setEventListeners() {
        this._element.querySelector('.place__like').addEventListener('click', () => {
            this._likePlace();
        });
        this._element.querySelector('.place__delete-button').addEventListener('click', () => {
            this._removePlace();
        });
        this._element.querySelector('.place__photo').addEventListener('click', () => {
            this._openPlace();
        });
        
    }
}