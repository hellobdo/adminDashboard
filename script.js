function getUserName(fullName) {
    return fullName.split('(')[0].trim();
}

const userName = document.querySelector(".userNameMain");
const userNameTopRight = document.querySelector(".userNameTopRight");

userNameTopRight.textContent = getUserName(userName.textContent);