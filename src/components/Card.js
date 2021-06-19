export class Card {
    constructor({ title, link }, cardSelector, handleCardClick) {
        this._cardSelector = cardSelector;
        this._title = title;
        this._link = link;
        this._handleCardClick = handleCardClick;
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

        this._placeTitle.textContent = this._title;
        this._placePhoto.src = this._link;
        this._placePhoto.alt = this._title;

        return this._element;
    }

    _likePlace() {
        this._likeButton.classList.toggle('place__like_active');
    }

    _removePlace() {
        this._element.closest('.place').remove();
    }

    _setEventListeners() {
        this._likeButton.addEventListener('click', () => {
            this._likePlace();
        });
        this._deleteButton.addEventListener('click', () => {
            this._removePlace();
        });
        this._placePhoto.addEventListener('click', () => {
            this._handleCardClick(this._element);
        });
        
    }
}