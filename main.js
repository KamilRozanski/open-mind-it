const hamburgerMenu = document.querySelector(".nav__menu__hamburger")

hamburgerMenu.addEventListener("click", function () {
    hamburgerMenu.classList.toggle("hamburger--active")

    console.log("click")
})