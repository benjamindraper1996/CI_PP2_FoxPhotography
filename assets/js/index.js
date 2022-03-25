var curindex=0
const blackWhitePath = "assets/images/black-white/"
const graffitiHatPath = "assets/images/graffiti-hat/"
const graffitiBlueHairPath = "assets/images/graffiti-blue-hair/"
const greenscreenPath = "assets/images/greenscreen/"
const orangeBenchPath = "assets/images/orange-bench/"
const pinkBenchPath = "assets/images/pink-bench/"
const pinkWindowsPath = "assets/images/pink-windows/"
const suffix = ".jpg"


function createArray(pictures) {
	if (pictures === orangeBenchArray){
		var orangeBenchArray=new Array()
		var numOfImg = 9;
		for (var x=1; x<=numOfImg; ++x) { 
			myImages[x] = new Image();
			myImages[x].src = orangeBenchPath + x + imgSuffix; 
		} 
		return true;
		} else {
			return
	}
}




/*
var orangeBenchArray=new Array()

	orangeBenchArray[0]=`${orangeBenchPath}1${suffix}`
	orangeBenchArray[1]=`${orangeBenchPath}2${suffix}`
	orangeBenchArray[2]=`${orangeBenchPath}3${suffix}`
	orangeBenchArray[3]=`${orangeBenchPath}4${suffix}`
	orangeBenchArray[4]=`${orangeBenchPath}5${suffix}`
	orangeBenchArray[5]=`${orangeBenchPath}6${suffix}`
    orangeBenchArray[6]=`${orangeBenchPath}7${suffix}`
    orangeBenchArray[7]=`${orangeBenchPath}8${suffix}`
    orangeBenchArray[8]=`${orangeBenchPath}9${suffix}`

var preload=new Array()

for (n=0;n<orangeBenchArray.length;n++)
{
	preload[n]=new Image()
	preload[n].src=orangeBenchArray[n]
}
*/
document.getElementsByTagName("img")
document.write('<img name="orangebench" src="'+orangeBenchArray[Math.floor(Math.random()*(orangeBenchArray.length))]+'">')

function rotateimage() {
	if (curindex==(tempindex=Math.floor(Math.random()*(orangeBenchArray.length)))){
		curindex=curindex==0? 1 : curindex-1
	} else {
		curindex=tempindex
		document.images.orangebench.src=orangeBenchArray[curindex]
	}
}
setInterval("rotateimage()",(Math.floor(Math.random()*15000)))
