const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
if (menu.classList.contains("showMenu")) {
  menu.classList.remove("showMenu");
} else {
  menu.classList.add("showMenu");
}
}

hamburger.addEventListener("click", toggleMenu);

const themeSwitch = document.querySelector('input');

themeSwitch.addEventListener('change', () => {
document.body.classList.toggle('dark-theme');
});
