const buttonDontClickMe = document.getElementById("dontClickMeButton");
const buttonMenu = document.getElementById("menu");
const menuDivButtons = document.getElementById("hide");
const menuDiv = document.getElementsByClassName("navigation")[0];
const body = document.getElementsByTagName("body")[0];

body.addEventListener("click", function (event) {
    if (event.target.id !== "hide" && buttonMenu.classList.contains("hide")) {
        menuDivButtons.classList.add("hide");
        buttonMenu.classList.remove("hide");
    } else if (event.target.id === "menu") {
        menuDivButtons.classList.remove("hide");
        buttonMenu.classList.add("hide");
    }
});

menuDiv.addEventListener("focusout", function () {
    menuDivButtons.classList.add("hide");
    buttonMenu.classList.remove("hide");
});

buttonDontClickMe.addEventListener("click", function () {
    alert("You just had to click it, didn't you?");
});