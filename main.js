// Ref
const hamburgerIcon = document.querySelector(".header-right > a");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const closeMenu = document.querySelector(".hamburger-menu > a")

//ACTION

//APERTURA del menù
hamburgerIcon.addEventListener("click", function() {
    console.log("Funziona")
    hamburgerMenu.style.display = "block";
});
//CHIUSURA del menù
closeMenu.addEventListener("click", function() {
    console.log("Funziona")
    hamburgerMenu.style.display = "none";
});