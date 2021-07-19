(()=>{"use strict";var e={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save-button",profileNameSelector:".profile__name",profileProfessionSelector:".profile__profession",profileAvatarSelector:".profile__avatar",inactiveButtonClass:"popup__save-button_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"},t=document.querySelector(".popup__form_type_edit"),n=document.querySelector(".profile__edit-button"),r=document.querySelector(".popup__input_type_name"),o=document.querySelector(".popup__input_type_profession"),i=document.querySelector(".popup__form_type_add"),u=document.querySelector(".profile__add-button"),a=document.querySelector(".popup__form_type_avatar"),c=document.querySelector(".profile__avatar-edit");function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t,n,r,o,i,u,a){var c,l,s=this,f=t.name,p=t.link,h=t.owner,_=t.likes,d=t._id;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),l=function(e){s._likes=e,s._likeCounter.textContent=null==e?void 0:e.length,s.showLikes(e)},(c="renderLikes")in this?Object.defineProperty(this,c,{value:l,enumerable:!0,configurable:!0,writable:!0}):this[c]=l,this._cardSelector=n,this._name=f,this._link=p,this._ownerId=h._id,this._likes=_,this._id=d,this._userId=r,this._handleCardClick=o,this._handleDeleteClick=a,this._deleteLikeCard=i,this._addLikeCard=u}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".place").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._placePhoto=this._element.querySelector(".place__photo"),this._placeTitle=this._element.querySelector(".place__title"),this._likeButton=this._element.querySelector(".place__like"),this._deleteButton=this._element.querySelector(".place__delete-button"),this._likeCounter=this._element.querySelector(".place__like-counter"),this._ownerId!==this._userId&&this._deleteButton.remove(),this.renderLikes(this._likes),this._setEventListeners(),this._placeTitle.textContent=this._name,this._placePhoto.src=this._link,this._placePhoto.alt=this._name,this._element}},{key:"_likedCard",value:function(e){var t=this;return null==e?void 0:e.some((function(e){return e._id===t._userId}))}},{key:"showLikes",value:function(e){this._likedCard(e)?this._likeButton.classList.add("place__like_active"):this._likeButton.classList.remove("place__like_active")}},{key:"_handleLikeClick",value:function(){this._likedCard(this._likes)?this._deleteLikeCard(this._id,this.renderLikes):this._addLikeCard(this._id,this.renderLikes)}},{key:"removeCard",value:function(){this._element.closest(".place").remove()}},{key:"_setEventListeners",value:function(){var e=this;this._likeButton.addEventListener("click",(function(){e._handleLikeClick()})),this._deleteButton.addEventListener("click",(function(){e._handleDeleteClick(e)})),this._placePhoto.addEventListener("click",(function(){e._handleCardClick(e._element)}))}}])&&l(t.prototype,n),e}();function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._config=t,this._formElement=n}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._config.inputErrorClass),t.textContent=e.validationMessage,t.classList.add(this._config.errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._config.inputErrorClass),t.classList.remove(this._config.errorClass),t.textContent=""}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._config.inactiveButtonClass),this._buttonElement.disabled=!0):(this._buttonElement.classList.remove(this._config.inactiveButtonClass),this._buttonElement.disabled=!1)}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_setEventListeners",value:function(){var e=this;this._inputList=Array.from(this._formElement.querySelectorAll(this._config.inputSelector)),this._buttonElement=this._formElement.querySelector(this._config.submitButtonSelector),this.toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e.toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}},{key:"resetErrorElement",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)}))}}])&&f(t.prototype,n),e}();function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var _=function(){function e(t){var n=t.profileNameSelector,r=t.profileProfessionSelector,o=t.profileAvatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileName=document.querySelector(n),this._profileProfession=document.querySelector(r),this._profileAvatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){var e={};return e.name=this._profileName.textContent,e.profession=this._profileProfession.textContent,e}},{key:"setUserInfo",value:function(e){this._profileName.textContent=e.name,this._profileProfession.textContent=e.about}},{key:"setAvatar",value:function(e){this._profileAvatar.src=e.avatar}}])&&h(t.prototype,n),e}();function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var y=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderer",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&d(t.prototype,n),e}();function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var m=function(){function e(t){var n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){"Escape"===e.key&&o.closePopup()},(n="_handleEscClose")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._popup=document.querySelector(t)}var t,n;return t=e,(n=[{key:"openPopup",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"closePopup",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){(t.target===t.currentTarget||t.target.classList.contains("popup__close-icon"))&&e.closePopup()}))}}])&&v(t.prototype,n),e}();function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t,n){return(g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(r);if(o){var n=E(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return w(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._handleFormSubmit=e,n._popupForm=n._popup.querySelector(".popup__form"),n._inputList=n._popup.querySelectorAll(".popup__input"),n._popupSubmitButton=n._popup.querySelector(".popup__save-button"),n._popupSubmitButtonTextDefault=n._popupSubmitButton.textContent,n}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;g(E(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}},{key:"closePopup",value:function(){g(E(u.prototype),"closePopup",this).call(this),this._popupForm.reset()}},{key:"waitSubmitButton",value:function(e){this._popupSubmitButton.textContent=e?"Сохранение...":this._popupSubmitButtonTextDefault}}])&&k(t.prototype,n),u}(m);function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t,n){return(O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=R(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function B(e,t){return(B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(e,t){return!t||"object"!==P(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=R(r);if(o){var n=R(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return j(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._handleCardDelete=e,n._popupDeleteYesButton=n._popup.querySelector(".popup__yes-button"),n._popupDeleteYesButtonTextDefault=n._popupDeleteYesButton.textContent,n}return t=u,(n=[{key:"openPopup",value:function(e){O(R(u.prototype),"openPopup",this).call(this),this._card=e}},{key:"setEventListeners",value:function(){var e=this;O(R(u.prototype),"setEventListeners",this).call(this),this._popupDeleteYesButton.addEventListener("click",(function(t){t.preventDefault(),e._handleCardDelete(e._card)}))}},{key:"waitSubmitButton",value:function(e){this._popupDeleteYesButton.textContent=e?"Удаление...":this._popupDeleteYesButtonTextDefault}}])&&L(t.prototype,n),u}(m);function q(e){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(e,t,n){return(x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=U(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function D(e,t){return(D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function A(e,t){return!t||"object"!==q(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function U(e){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var N,V=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=U(r);if(o){var n=U(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return A(this,e)});function u(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),i.call(this,e)}return t=u,(n=[{key:"openPopup",value:function(e){x(U(u.prototype),"openPopup",this).call(this);var t=this._popup.querySelector(".popup__place-photo"),n=this._popup.querySelector(".popup__place-title"),r=e.querySelector(".place__photo"),o=e.querySelector(".place__title");t.src=r.src,t.alt=r.alt,n.textContent=o.textContent}}])&&T(t.prototype,n),u}(m);function Y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var J=new(function(){function e(t){var n=t.url,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=n,this._headers=r}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then((function(t){return e._checkResponse(t)}))}},{key:"addNewCard",value:function(e){var t=this,n=e.name,r=e.link;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:n,link:r})}).then((function(e){return t._checkResponse(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._checkResponse(e)}))}},{key:"addLikeCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then((function(e){return t._checkResponse(e)}))}},{key:"deleteLikeCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._checkResponse(e)}))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._url,"/users/me"),{headers:this._headers}).then((function(t){return e._checkResponse(t)}))}},{key:"editUserInfo",value:function(e){var t=this,n=e.name,r=e.profession;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:n,about:r})}).then((function(e){return t._checkResponse(e)}))}},{key:"editAvatarUser",value:function(e){var t=this,n=e.avatar;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:n})}).then((function(e){return t._checkResponse(e)}))}}])&&Y(t.prototype,n),e}())({url:"https://nomoreparties.co/v1/cohort-25",headers:{authorization:"a7473b4e-4df8-4060-a905-03a96de8bd8c","Content-Type":"application/json"}});function H(e){return new s(e,"#place-template",N,$,K,Q,G).generateCard()}var M=new y({renderer:function(e){var t=H(e);M.addItem(t)}},".elements__list"),z=new _(e);function $(e){ee.openPopup(e)}function G(e){te.openPopup(e)}Promise.all([J.getUserInfo(),J.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);u=!0);}catch(e){a=!0,o=e}finally{try{u||null==n.return||n.return()}finally{if(a)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return F(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?F(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];N=o._id,z.setUserInfo(o),z.setAvatar(o),M.renderer(i)})).catch((function(e){console.log(e)}));var K=function(e,t){J.deleteLikeCard(e).then((function(e){t(e.likes)})).catch((function(e){console.log(e)}))},Q=function(e,t){J.addLikeCard(e).then((function(e){t(e.likes)})).catch((function(e){console.log(e)}))},W=new C((function(e){W.waitSubmitButton(!0),J.editUserInfo({name:e.name,profession:e.profession}).then((function(e){z.setUserInfo(e),W.closePopup()})).catch((function(e){console.log(e)})).finally((function(){W.waitSubmitButton(!1)}))}),".popup_type_edit");W.setEventListeners();var X=new C((function(e){X.waitSubmitButton(!0),J.addNewCard({name:e.name,link:e.link}).then((function(e){var t=H(e);M.addItem(t),X.closePopup()})).catch((function(e){console.log(e)})).finally((function(){X.waitSubmitButton(!1)}))}),".popup_type_add");X.setEventListeners();var Z=new C((function(e){Z.waitSubmitButton(!0),J.editAvatarUser({avatar:e.avatar}).then((function(e){z.setAvatar(e),Z.closePopup()})).catch((function(e){console.log(e)})).finally((function(){Z.waitSubmitButton(!1)}))}),".popup_type_avatar");Z.setEventListeners();var ee=new V(".popup_type_view");ee.setEventListeners();var te=new I((function(e){te.waitSubmitButton(!0),J.deleteCard(e._id).then((function(t){e.removeCard(t),te.closePopup()})).catch((function(e){console.log(e)})).finally((function(){te.waitSubmitButton(!1)}))}),".popup_type_confirm");te.setEventListeners();var ne=new p(e,t);ne.enableValidation();var re=new p(e,i);re.enableValidation();var oe=new p(e,a);oe.enableValidation(),n.addEventListener("click",(function(){W.openPopup();var e=z.getUserInfo();r.value=e.name,o.value=e.profession,ne.resetErrorElement()})),u.addEventListener("click",(function(){X.openPopup(),re.toggleButtonState(),re.resetErrorElement()})),c.addEventListener("click",(function(){Z.openPopup(),oe.toggleButtonState(),oe.resetErrorElement()}))})();