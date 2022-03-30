/**
 * The menu.js is used by all html files to display the dropdown navigation 
 * menu, Social media icons and switch that changes the website between the
 *  light and dark theme.
 */
// Menu Variables
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

/**
 * toggleMenu switches between showing the dropdown navigation menu and closing it again.
 */
function toggleMenu() {
if (menu.classList.contains("showMenu")) {
  menu.classList.remove("showMenu");
} else {
  menu.classList.add("showMenu");
}
}

//Listens for when the Hamburger icon is clicked.
hamburger.addEventListener("click", toggleMenu);

//Theme Switcher variable.
const themeSwitch = document.querySelector('input');

//Listens for when someone clicks on the slider to change the theme.
themeSwitch.addEventListener('change', () => {
document.body.classList.toggle('dark-theme');
});
