let hamburgerMenu = document.querySelector(".nav__menu__hamburger")
const navMenu = document.querySelector(".nav__menu ")


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


// show/hide phone/email

const mobilePhoneIcon = document.querySelector(".contact__phone__img")
const mobileNumber = document.querySelector(".contact__phone__despription")
const mailIcon = document.querySelector(".contact__mail__img")
const mailAddress = document.querySelector(".contact__mail__despription")


function showHideElement(el) {

    el.classList.toggle("contact__despription__active--js")
    if (mobileNumber.classList.contains("contact__despription__active--js")) {
        el.innerHTML = "07482200820"
        console.log("elo")
    } else {
        el.innerHTML = "Call us"
    } 
    // if (mailAddress.classList.contains("contact__despription__active--js")) {
    //     el.innerHTML = "info@open-mind-it"
    // } else {
    //     el.innerHTML = "Send to us an email"
    // }
}

mobilePhoneIcon.addEventListener("click", function () {
    showHideElement(mobileNumber)
})
mailIcon.addEventListener("click", function () {
    showHideElement(mailAddress)
})