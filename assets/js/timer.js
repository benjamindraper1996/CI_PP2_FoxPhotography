window.addEventListener("DOMContentLoaded", setupStopwatch);

var clock = document.getElementById("time");
var start = addEventListener("click", document.getElementById("slide"))
var stop = window.addEventListener(win(), )
var reset = addEventListener("click", document.getElementById("image-select"))
var stopTime = 0;
var startTime = 0;
var intervalID = 0;

// Sets up the stopwatch functionality for the app
function setupStopwatch() {
    start.addEventListener("click", function() {
        if (intervalID === 0) {
            startTime = Date.now();
            intervalID = 1
            return;
        }
    }),

    //Stops the clock
    stop.addEventListener("click", function() {
        if (intervalID === 1) {
            stopTime = Date.now();
            intervalID = 0
            clearInterval(intervalID);
            return;
        }
    }),

// Set an interval to update the clock
intervalID = setInterval(function() {
    var elapsedTime = Date.now() - startTime;
    time.textContent = formatTime(elapsedTime);
    }, 100),

    /// rests the clock when new image is clicked
    reset.addEventListener("click", function() {
        if (intervalID === 1) {
            stopTime = Date.now();
            intervalID = 0
            clearInterval(intervalID);
            time.textContent = "00:00";
            return;
        } else {
            intervalID = 0
            clearInterval(intervalID);
            time.textContent = "00:00";
        }
    }),


// Helper function that takes a UTC timestamp and returns a formatted time string
function formatTime(timestamp) {
var d = new Date(timestamp);

var minutes = d.getMinutes();
if (minutes < 10) {
    minutes = "0" + minutes;
}

var seconds = d.getSeconds();
if (seconds < 10) {
    seconds = "0" + seconds;
}

return minutes + ":" + seconds;
}
}
