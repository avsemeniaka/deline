"use strict";
// burger menu 

burgerMenuActive();

function burgerMenuActive() {
    const burgerMenu = document.querySelector(".menu-nav"),
          burgerButton = document.querySelector(".burger-button");

    if (burgerButton) {

        let burgerButtonLine = document.querySelector(".burger-button__line");

        burgerButton.addEventListener("click", () => {
            burgerMenu.classList.toggle("menu-nav_active");
            burgerButtonLine.classList.toggle("burger-button__line_active");
        })
    }
};

