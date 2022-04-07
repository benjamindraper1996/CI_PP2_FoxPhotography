/**
 * The menu.js is used by all html files to display the dropdown navigation 
 * menu, Social media icons and switch that changes the website between the
 *  light and dark theme.
 */
// Menu Variables
var menu = document.querySelector(".menu");
var menuItems = document.querySelectorAll(".menuItem");
var hamburger= document.querySelector(".hamburger");
var closeIcon= document.querySelector(".closeIcon");
var menuIcon = document.querySelector(".menuIcon");

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
var themeSwitch = document.querySelector('input');

//Listens for when someone clicks on the slider to change the theme.
themeSwitch.addEventListener('change', function() {
document.body.classList.toggle('dark-theme');
});
