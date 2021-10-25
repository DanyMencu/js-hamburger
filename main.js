// Ref
const hamburgerIcon = document.querySelector(".header-right > a");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const closeMenu = document.querySelector(".hamburger-menu > a")

//ACTION

//APERTURA del menù
hamburgerIcon.addEventListener("click", function() {
    hamburgerMenu.classList.add("active");
});
//CHIUSURA del menù
closeMenu.addEventListener("click", function() {
    hamburgerMenu.classList.remove("active");
});