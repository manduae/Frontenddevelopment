// JavaScript Document

// var kruisAnimatie = document.querySelector("nav");

// function AnimatieTonen() {
//   kruisAnimatie.classList.toggle("kruis");
// }

// kruisAnimatie.addEventListener("click",AnimatieTonen);


// Hamburger menu micro interactie
var navbar = document.querySelector("nav");
var ham = document.querySelector(".hamburgermenu");

// toggles hamburger menu wanneer erop geklikt wordt
function toggleHamburger(){
  navbar.classList.toggle("showNav");
  ham.classList.toggle("showClose");
}
 
ham.addEventListener("click", toggleHamburger);


