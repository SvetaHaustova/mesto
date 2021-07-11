export class UserInfo {
    constructor({ profileNameSelector, profileProfessionSelector, profileAvatarSelector }) {
        this._profileName = document.querySelector(profileNameSelector);
        this._profileProfession = document.querySelector(profileProfessionSelector);
        this._profileAvatar = document.querySelector(profileAvatarSelector);
    }

    getUserInfo() {
        const userInfoList = {};
        userInfoList.name = this._profileName.textContent;
        userInfoList.profession = this._profileProfession.textContent;
        return userInfoList;
    }

    setUserInfo(data) {
        this._profileName.textContent = data.name;
        this._profileProfession.textContent = data.about;
    }

    setAvatar(data) {
        this._profileAvatar.src = data.avatar;
    }
}
