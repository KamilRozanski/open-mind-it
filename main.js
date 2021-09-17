let hamburgerMenu = document.querySelector(".nav__menu__hamburger")
const navMenu = document.querySelector(".nav__menu")


hamburgerMenu.addEventListener("click", function () {
    hamburgerMenu.classList.toggle("hamburger--active")
    navMenu.classList.toggle("navMenu--active")
})

// show/hide phone/email

const mobilePhoneIcon = document.querySelector(".contact__phone__img")
const mobileNumber = document.querySelector(".contact__phone__despription")
const mailIcon = document.querySelector(".contact__mail__img")
const mailAddress = document.querySelector(".contact__mail__despription")


function showHidePhoneNumber(el) {
    el.classList.toggle("contact__despription__active--js")

    mobileNumber.classList.contains("contact__despription__active--js") ? el.innerHTML = "07482200820" : el.innerHTML = "Call us"
}

function showHideMail(el) {

    el.classList.toggle("contact__despription__active--js")

    mailAddress.classList.contains("contact__despription__active--js") ? el.innerHTML = "info@open-mind-it" : el.innerHTML = "Send to us an email"

}

mobilePhoneIcon.addEventListener("click", function () {
    showHidePhoneNumber(mobileNumber)
})
mailIcon.addEventListener("click", function () {
    showHideMail(mailAddress)
})




//slide sections



function addScroolInClass(el) {
    el.classList.add("slideIn")
}



window.addEventListener("scroll", function () {
    let = yOffSet = window.pageYOffset
    const headerTitle = document.querySelector(".header__title");
    const headerText = document.querySelector(".header__text");
    const aboutOpenMindITTitle = document.querySelector(".about__open-mind__title");
    const aboutOpenMindITDescriptions = document.querySelector(".about__open-mind__descroptions");
    // const headerText = document.querySelector(".header__text");
    // const headerText = document.querySelector(".header__text");


    console.log(yOffSet)

    if (yOffSet <= 0) {
        addScroolInClass(headerTitle)
        addScroolInClass(headerText)
    }
    if (yOffSet >= 800) {
        addScroolInClass(aboutOpenMindITTitle)
        addScroolInClass(aboutOpenMindITDescriptions)
        console.log("elo")
    }
})