//Navbar
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");

//Add click event
menuBtn.addEventListener("click", () => {
//Toggle menu open class
menu.classList.toggle("menu-open");

//Hide menu
  window.onscroll = () => {
    menu.classList.remove("menu-open");
  }
});





