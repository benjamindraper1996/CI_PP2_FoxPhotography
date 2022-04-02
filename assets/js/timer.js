window.addEventListener("DOMContentLoaded", setupStopwatch);

// Sets up the stopwatch functionality for the app
function setupStopwatch() {
var clock = document.getElementById("time");
var start = addEventListener("click", document.getElementById("slide"))
var stop = addEventListener(win())
var reset = addEventListener("click", document.getElementById("image-select"))

var stopTime = 0;
var startTime = 0;
var intervalID = 0;

//Starts the timer
start.addEventListener("click", function() {
if (intervalID === 0) {
// start the clock.
startTime = Date.now();
intervalID = 1
return;
}
},

stop.addEventListener("click", function() {
if (intervalID === 1) {
// start the clock.
stopTime = Date.now();
intervalID = 0
clearInterval(intervalID);
return;
}
},

reset.addEventListener("click", function() {
if (intervalID === 1) {
stopTime = Date.now();
intervalID = 0
clearInterval(intervalID);
clock.textContent = "00:00";
startTime = Date.now();
return;
};
).