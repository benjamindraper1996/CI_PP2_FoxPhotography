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
            shiftSlide(this);
            winGame();
        });
    }

}