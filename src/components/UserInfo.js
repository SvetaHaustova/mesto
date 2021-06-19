export class UserInfo {
    constructor({ profileNameSelector, profileProfessionSelector }) {
        this._profileName = document.querySelector(profileNameSelector);
        this._profileProfession = document.querySelector(profileProfessionSelector);
    }

    getUserInfo() {
        const userInfoList = {};
        userInfoList.name = this._profileName.textContent;
        userInfoList.profession = this._profileProfession.textContent;
        return userInfoList;
    }

    setUserInfo(userInfoList) {
        this._profileName.textContent = userInfoList.name;
        this._profileProfession.textContent = userInfoList.profession;
    }
}