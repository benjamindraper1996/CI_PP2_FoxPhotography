/**
 * the index.js is used by the index.html file to manage the arrays 
 * within the rotating the home page gallery.
 */

var delay=1000 //Time in milliseconds the images will change.
var curindex=0

//Image Array for for 'black-white' folder.
var blackwhite = new Array()
blackwhite[0] = "assets/images/black-white/1.webp";
blackwhite[1] = "assets/images/black-white/2.webp";
blackwhite[2] = "assets/images/black-white/3.webp";

//Image Array for for 'graffiti-blue-hair' folder.
var graffitiBlueHair = new Array()
graffitiBlueHair[0] = "assets/images/graffiti-blue-hair/1.webp";
graffitiBlueHair[1] = "assets/images/graffiti-blue-hair/2.webp";
graffitiBlueHair[2] = "assets/images/graffiti-blue-hair/3.webp";

//Image Array for for 'pink-windows' folder.
var pinkWindows = new Array()
pinkWindows[0] = "assets/images/pink-windows/1.webp";
pinkWindows[1] = "assets/images/pink-windows/2.webp";
pinkWindows[2] = "assets/images/pink-windows/3.webp";

//Image Array for for 'graffiti-hat' folder.
var graffitiHat = new Array()
graffitiHat[0] = "assets/images/graffiti-hat/1.webp";
graffitiHat[1] = "assets/images/graffiti-hat/2.webp";
graffitiHat[2] = "assets/images/graffiti-hat/3.webp";

//Image Array for for 'orange-bench' folder.
var greenscreen = new Array()
greenscreen[0] = "assets/images/greenscreen/1.webp";
greenscreen[1] = "assets/images/greenscreen/2.webp";
greenscreen[2] = "assets/images/greenscreen/3.webp";

//Image Array for for 'orange-bench' folder.
var orangeBench = new Array()
orangeBench[0] = "assets/images/orange-bench/1.webp";
orangeBench[1] = "assets/images/orange-bench/2.webp";
orangeBench[2] = "assets/images/orange-bench/3.webp";

//Image Array for for 'pink-bench' folder.
var pinkBench = new Array()
pinkBench[0] = "assets/images/pink-bench/1.webp";
pinkBench[1] = "assets/images/pink-bench/2.webp";
pinkBench[2] = "assets/images/pink-bench/3.webp";

//Image Array for for 'arcade' folder.
var arcade = new Array()
arcade[0] = "assets/images/arcade/1.webp";
arcade[1] = "assets/images/arcade/2.webp";
arcade[2] = "assets/images/arcade/3.webp";

var preload = new Array

//For loops to preload images into arrays.
for (n=0;n<blackwhite.length;n++)
for (n=0;n<graffitiBlueHair.length;n++)
for (n=0;n<pinkWindows.length;n++)
for (n=0;n<graffitiHat.length;n++)
for (n=0;n<greenscreen.length;n++)
for (n=0;n<orangeBench.length;n++)
for (n=0;n<arcade.length;n++)
for (n=0;n<pinkBench.length;n++) {
preload[n]=new Image()
preload[n].src=blackwhite[n]
preload[n].src=graffitiBlueHair[n]
preload[n].src=pinkWindows[n]
preload[n].src=graffitiHat[n]
preload[n].src=greenscreen[n]
preload[n].src=orangeBench[n]
preload[n].src=arcade[n]
preload[n].src=pinkBench[n]
}

/**
 * rotateimage changes the images in the home page gallery at random intervals.
 */
function rotateimage() {
//Randomizes which picture from within each array we are using.
if (curindex==(tempindex=Math.floor(Math.random()*3))){
	curindex=curindex==0? 1 : curindex-1
	}
	else
	curindex=tempindex

	//Randomizes which image changes each time the function runs.
	if (Math.floor(Math.random()*8) == 0) {
		document.images.blackWhite.src=blackwhite[curindex]
	} else if (Math.floor(Math.random()*8) == 1) {
		document.images.graffitiBlueHair.src=graffitiBlueHair[curindex]
	} else if (Math.floor(Math.random()*8) == 2) {
		document.images.pinkWindows.src=pinkWindows[curindex]
	} else if (Math.floor(Math.random()*8) == 3) {
		document.images.orangeBench.src=orangeBench[curindex]
	} else if (Math.floor(Math.random()*8) == 4) {
		document.images.graffitiHat.src=graffitiHat[curindex]
	} else if (Math.floor(Math.random()*8) == 5) {
		document.images.greenscreen.src=greenscreen[curindex]
	} else if (Math.floor(Math.random()*8) == 6) {
		document.images.arcade.src=arcade[curindex]
	} else if (Math.floor(Math.random()*8) == 7) {
		document.images.pinkBench.src=pinkBench[curindex]
	}

}

//Calls function at set intervals.
setInterval("rotateimage()", delay)
