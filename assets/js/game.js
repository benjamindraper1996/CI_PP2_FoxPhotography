var game = new Object();
/* Defines the game board */
game.slides = Array.from(document.getElementsByClassName('slide'));
/* Defines the game folders */
game.folderList = ["bluelight","graffitiHat","graffitiWall","greenscreen","pinkBench","pinkWindows"];
game.gameStarted = false;
/* Sets up the game board */
game.img = {
    1: "1.jpg",
    2: "2.jpg",
    3: "3.jpg",
    4: "4.jpg",
    5: "5.jpg",
    6: "6.jpg",
    7: "7.jpg",
    8: "8.jpg",
    9: "",
};

game.empty = document.getElementById('emptyslide');
game.win = Array.from(document.getElementsByClassName('slide'));
game.gameAreaOuter = document.getElementById('game-area-outer');
game.gameImgOuter = document.getAnimations('game-img-outer');
game.imgSelect = document.getElementsByClassName('img-select');

/* function to add images to the slides */
function setGameImage(folderpath) {
    if (folderpath == undefined) {
        var randomFolder = Math.floor((Math.random()*6));
        var folder = game.folderList[randomFolder]
        game.gameImgOuter.style.backgroundImage = "url('"+"assets/images/"+folder+"/"+"frame.jpg"+"')"

        for (i=0;i<game.tiles.length; i++) {
            var slideImage = i + 1;
            game.slides[i].style.backgroundImage = "url('"+"assets/images/"+folder+"/"+game.img[slideImage]+"')"
        }
    } else {
        game.gameImgOuter.style.backgroundImage = "url('"+"assets/images/"+folderpath+"/"+"frame.jpg"+"')"
	    for(var i=0;i<game.tiles.length;i++) {
            var tileImg = i+1;
		    game.tiles[i].style.backgroundImage = "url('"+"assets/images/"+folderpath+"/"+game.img[slideImage]+"')"
        }
    }
}

/* Adds the event listener for each slide */
function tileClick () {
    for (i=0; i<game.slides.length; i++) {
        game.slides[i].addEventListener('click', function() {
            shiftSlide(this); // Needs to be set
            winGame(); // Needs to be set
        });
    }

    /* Resets and shuffles the game board */
    for (i=0; i<game.imgSelect.length; i++) {
        game.imgSelect[i].addEventListener('click', function(){
            game.slides = Array.from(document.getElementsByClassName('slide'));
            setGameImage(this.name);
            setSlides(game); // Needs to be set
            game.gameAreaOuter.style.display = "none";
        });
    }
}

/* randomizes the slides */
function shuffleSlides(array) {
    var a = Math.floor(((Math.random()*150)+150));
    var bottomRight = [-3,-1];
	var bottomLeft = [-3,1];
	var topRight = [3,-1];
	var topLeft = [3,1];
	var middleRight = [-1,-3,3];
	var middleLeft = [1,3,-3];
	var middleTop = [1,-1,3];
	var middleBottom = [1,-1,-3];
	var middle = [1,3,-3,-1];
    var moves;

    for(i=0; i<a; i++) {				
        var position = Array.prototype.indexOf.call(array,game.blanktile);

        if(position == 0){
            moves = topLeft;
        }
        if (position == 1) {
            moves = middleTop;
        }
        if(position == 2){
            moves = topRight;
        }
        if(position == 3){
            moves = middleLeft;
        }
        if(position == 4){
            moves = middle;
        }
        if(position == 5){
            moves = middleRight;
        }
        if (position == 6) {
            moves = bottomLeft;
        }
        if (position == 7) {
            moves = middleBottom
        }
        if (position == 8) {
            moves = bottomRight;
        }

        move = moves[Math.floor(Math.random()*moves.length)];
        console.log(position);
        array[position] = array[position+move];
        array[position+move] = game.blanktile;
    }
    return array
}