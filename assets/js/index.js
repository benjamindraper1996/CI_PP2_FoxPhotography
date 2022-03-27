var delay=1000
var curindex=0

var blackwhite = new Array()
	blackwhite[0] = "assets/images/black-white/1.jpg";
	blackwhite[1] = "assets/images/black-white/2.jpg";
	blackwhite[2] = "assets/images/black-white/3.jpg";

var graffitiBlueHair = new Array()
	graffitiBlueHair[0] = "assets/images/graffiti-blue-hair/1.jpg";
	graffitiBlueHair[1] = "assets/images/graffiti-blue-hair/2.jpg";
	graffitiBlueHair[2] = "assets/images/graffiti-blue-hair/3.jpg";

var pinkWindows = new Array()
	pinkWindows[0] = "assets/images/pink-windows/1.jpg";
	pinkWindows[1] = "assets/images/pink-windows/2.jpg";
	pinkWindows[2] = "assets/images/pink-windows/3.jpg";

var graffitiHat = new Array()
	graffitiHat[0] = "assets/images/graffiti-hat/1.jpg";
	graffitiHat[1] = "assets/images/graffiti-hat/2.jpg";
	graffitiHat[2] = "assets/images/graffiti-hat/3.jpg";

var greenscreen = new Array()
	greenscreen[0] = "assets/images/greenscreen/1.jpg";
	greenscreen[1] = "assets/images/greenscreen/2.jpg";
	greenscreen[2] = "assets/images/greenscreen/3.jpg";

var orangeBench = new Array()
	orangeBench[0] = "assets/images/orange-bench/1.jpg";
	orangeBench[1] = "assets/images/orange-bench/2.jpg";
	orangeBench[2] = "assets/images/orange-bench/3.jpg";

var pinkBench = new Array()
	pinkBench[0] = "assets/images/pink-bench/1.jpg";
	pinkBench[1] = "assets/images/pink-bench/2.jpg";
	pinkBench[2] = "assets/images/pink-bench/3.jpg";

var preload = new Array

for (n=0;n<blackwhite.length;n++)
for (n=0;n<graffitiBlueHair.length;n++)
for (n=0;n<pinkWindows.length;n++)
for (n=0;n<graffitiHat.length;n++)
for (n=0;n<greenscreen.length;n++)
for (n=0;n<orangeBench.length;n++)
for (n=0;n<pinkBench.length;n++) {
	preload[n]=new Image()
	preload[n].src=blackwhite[n]
	preload[n].src=graffitiBlueHair[n]
	preload[n].src=pinkWindows[n]
	preload[n].src=graffitiHat[n]
	preload[n].src=greenscreen[n]
	preload[n].src=orangeBench[n]
	preload[n].src=pinkBench[n]
}

function rotateimage() {
	if (curindex==(tempindex=Math.floor(Math.random()*3))){
		curindex=curindex==0? 1 : curindex-1
		}
		else
		curindex=tempindex

		document.images.blackWhite.src=blackwhite[curindex]
		document.images.graffitiBlueHair.src=graffitiBlueHair[curindex]
		document.images.pinkWindows.src=pinkWindows[curindex]
		document.images.graffitiHat.src=graffitiHat[curindex]
		document.images.greenscreen.src=greenscreen[curindex]
		document.images.orangeBench.src=orangeBench[curindex]
		document.images.pinkBench.src=pinkBench[curindex]
}

setInterval("rotateimage()", 1000)
