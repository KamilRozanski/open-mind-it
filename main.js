let hamburgerMenu = document.querySelector(".nav__menu__hamburger")
const navMenu = document.querySelector(".nav__menu")


hamburgerMenu.addEventListener("click", function () {
    hamburgerMenu.classList.toggle("hamburger--active")
    navMenu.classList.toggle("navMenu--active")

    console.log("click")
})

function fixedMenu() {
    let currentlyScrolledPixel = window.scrollY
    let = hamburgerMenuHeight = document.querySelector(".nav__menu__hamburger").offsetTop;

    currentlyScrolledPixel >= hamburgerMenuHeight ? hamburgerMenu.classList.add("nav__menu__hamburger--sticy") : hamburgerMenu.classList.remove("nav__menu__hamburger--sticy")
}

window.addEventListener("scroll", fixedMenu)