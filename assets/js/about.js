/**
 * The about.js file is used by the about.html to control the carousel.
 */
//carousel variables
var slider = document.querySelector(".items");
var slides = document.querySelectorAll(".item");
var button = document.querySelectorAll(".button");
var current = 0;
var prev = 4;
var next = 1;

//for loop using .length to add in the event listener.
for (var i = 0; i < button.length; i++) {
button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
}

//Previous and Next variables for the lase seen and next images.
var gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);
var gotoNext = () => current < 4 ? gotoNum(current + 1) : gotoNum(0);
//gotoNum variable for Math to figure out which way to trun teh carousel.
var gotoNum = number => {
current = number;
prev = current - 1;
next = current + 1;

//For loop removing class' from slides once they are no longer visible to the user.
for (var i = 0; i < slides.length; i++) {
	slides[i].classList.remove("active");
	slides[i].classList.remove("prev");
	slides[i].classList.remove("next");
}

//2 if statements to reset next and prev values.
if (next == 5) {
	next = 0;
}

if (prev == -1) {
	prev = 4;
}

//For loop adding class' from slides once they become visible to the user.
slides[current].classList.add("active");
slides[prev].classList.add("prev");
slides[next].classList.add("next");
};