export class Card {
    constructor({ name, link, owner, likes, _id }, cardSelector, userId, handleCardClick, deleteLikeCard, addLikeCard, handleDeleteClick) {  
        this._cardSelector = cardSelector;
        this._name = name;
        this._link = link;
        this._ownerId = owner._id;
        this._likes = likes;
        this._id = _id;
        this._userId = userId;
        this._handleCardClick = handleCardClick;
        this._handleDeleteClick = handleDeleteClick; 
        this._deleteLikeCard = deleteLikeCard;
        this._addLikeCard = addLikeCard;
    }

    //Сформировать карточку места

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
        this._likeCounter = this._element.querySelector('.place__like-counter');

        if (this._ownerId !== this._userId) {
            this._deleteButton.remove();
        }
        
        this.renderLikes(this._likes);
        this._setEventListeners();

        this._placeTitle.textContent = this._name;
        this._placePhoto.src = this._link;
        this._placePhoto.alt = this._name;

        return this._element;
    }

    //Определить, есть ли среди лайкнувших данный юзер

    _likedCard(likes) {
        return likes?.some((user) => {
            return user._id === this._userId
        })
    }

    //Закрасить лайк, если юзер лайкнул карточку

    showLikes(likes) {
        if (this._likedCard(likes)) {
            this._likeButton.classList.add('place__like_active');
        } else {
            this._likeButton.classList.remove('place__like_active');
        }
    }

    _handleLikeClick() {
        if (this._likedCard(this._likes)) {
            this._deleteLikeCard(this._id, this.renderLikes)
        } else {
            this._addLikeCard(this._id, this.renderLikes)
        }
    }

    // Отобразить количество лайков

    renderLikes = (likes) => {
        this._likes = likes;
        this._likeCounter.textContent = likes?.length;
        this.showLikes(likes);
    }

    removeCard() {
        this._element.closest('.place').remove();
    }

    _setEventListeners() {
        this._likeButton.addEventListener('click', () => {
            this._handleLikeClick();
        });
        this._deleteButton.addEventListener('click', () => {
            this._handleDeleteClick(this);
        });
        this._placePhoto.addEventListener('click', () => {
            this._handleCardClick(this._element);
        });
    }
}