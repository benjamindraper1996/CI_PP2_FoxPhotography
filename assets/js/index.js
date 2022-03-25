const blackWhitePath = "assets/images/black-white/"
const graffitiBlueHairPath = "assets/images/graffiti-blue-hair/"
const graffitiHatPath = "assets/images/graffiti-hat/"
const greenscreenPath = "assets/images/greenscreen/"
const orangeBenchPath = "assets/images/orange-bench/"
const pinkBenchPath = "assets/images/pink-bench/"
const pinkWindowsPath = "assets/images/pink-windows/"
const suffix = ".jpg"

list = ["blackWhite", "graffitiBlueHair", "graffitiHat", "greenscreen", "orangeBench", "pinkBench", "pinkWindows"];

function rotateimage(tags) {
	let x = (Math.floor(Math.random()*3)+1);
	if (tags === blackWhite) {
		document.getElementsByName("blackWhite").src=`${blackWhitePath}${x}${suffix}`;
	} else if (tags === graffitiBlueHair) {
		document.getElementsByName("graffitiBlueHair").src=`${graffitiBlueHairPath}${x}${suffix}`;
	} else if (tags === graffitiHat) {
		document.getElementsByName("graffitiHat").src=`${graffitiHatPath}${x}${suffix}`;
	} else if(tags === greenscreen) {
		document.getElementsByName("greenscreen").src=`${greenscreenPath}${x}${suffix}`;
	} else if(tags === orangeBench) {
		document.getElementsByName("orangeBench").src=`${orangeBenchPath}${x}${suffix}`;
	} else if(tags === pinkBench) {
		document.getElementsByName("pinkBench").src=`${pinkBenchPath}${x}${suffix}`;
	} else if(tags === pinkWindows) {
		document.getElementsByName("pinkWindows").src=`${pinkWindowsPath}${x}${suffix}`;
	}
}

setInterval(rotateimage(list[Math.floor(Math.random()*7)])), (Math.floor(Math.random()*5000))