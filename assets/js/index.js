var delay=5000 //set delay in miliseconds
var curindex=0
var orangeBenchPath = "assets/images/orange-bench/"
var suffix = ".jpg"

var orangebenchArray=new Array()

	orangebenchArray[0]=`${orangeBenchPath}1${suffix}`
	orangebenchArray[1]=`${orangeBenchPath}2${suffix}`
	orangebenchArray[2]=`${orangeBenchPath}3${suffix}`
	orangebenchArray[3]=`${orangeBenchPath}4${suffix}`
	orangebenchArray[4]=`${orangeBenchPath}5${suffix}`
	orangebenchArray[5]=`${orangeBenchPath}6${suffix}`
    orangebenchArray[6]=`${orangeBenchPath}7${suffix}`
    orangebenchArray[7]=`${orangeBenchPath}8${suffix}`
    orangebenchArray[8]=`${orangeBenchPath}9${suffix}`

var preload=new Array()

for (n=0;n<orangebenchArray.length;n++)
{
	preload[n]=new Image()
	preload[n].src=orangebenchArray[n]
}

document.write('<img name="orangebench" src="'+orangebenchArray[Math.floor(Math.random()*(orangebenchArray.length))]+'">')

function rotateimage()
{

if (curindex==(tempindex=Math.floor(Math.random()*(orangebenchArray.length)))){
curindex=curindex==0? 1 : curindex-1
}
else
curindex=tempindex

	document.images.defaultimage.src=orangebenchArray[curindex]
}

setInterval("rotateimage()",delay)

