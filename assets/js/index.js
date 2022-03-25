var delay=5000 //set delay in miliseconds
var curindex=0
var orangeBenchPath = "assets/images/orange-bench/"
var suffix = ".jpg"

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

document.write('<img name="orangebench" src="'+orangeBenchArray[Math.floor(Math.random()*(orangeBenchArray.length))]+'">')

function rotateimage() {
	if (curindex==(tempindex=Math.floor(Math.random()*(orangeBenchArray.length)))){
		curindex=curindex==0? 1 : curindex-1
	} else {
		curindex=tempindex
		document.images.orangebench.src=orangeBenchArray[curindex]
	}
}
setInterval("rotateimage()",delay)
