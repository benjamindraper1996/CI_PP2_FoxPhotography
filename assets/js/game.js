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
game.gameImg = document.getElementById('game-img');
game.imgSelect = document.getElementsByClassName('img-select');

/* function to add images to the slides */
function setGameImage(folderpath) {
    if (folderpath == undefined) {
        var randomFolder = Math.floor((Math.random()*6));
        var folder = game.folderList[randomFolder]
        game.gameImg.style.backgroundImage = "url('"+"assets/images/game/"+folder+"/"+"frame.jpg"+"')"

        for (i=0;i<game.slides.length; i++) {
            var slideImage = i + 1;
            game.slides[i].style.backgroundImage = "url('"+"assets/images/game/"+folder+"/"+game.img[slideImage]+"')"
        }
    } else {
        game.gameImg.style.backgroundImage = "url('"+"assets/images/game/"+folderpath+"/"+"frame.jpg"+"')"
	    for(var i=0;i<game.slides.length;i++) {
            var slideImage = i + 1;
		    game.slides[i].style.backgroundImage = "url('"+"assets/images/game/"+folderpath+"/"+game.img[slideImage]+"')"
        }
    }
}

/* Adds the event listener for each slide */
function slideClick () {
    for (i=0; i<game.slides.length; i++) {
        game.slides[i].addEventListener('click', function() {
            moveSlide(this); // Needs to be set
            winGame(); // Needs to be set
        });
    }

    /* Resets and shuffles the game board */
    for (i=0; i<game.imgSelect.length; i++) {
        game.imgSelect[i].addEventListener('click', function(){
            game.slides = Array.from(document.getElementsByClassName('slide'));
            setGameImage(this.name);
            setSlides(game);
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
        var position = Array.prototype.indexOf.call(array,game.empty);

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
        array[position] = array[position+move];
        array[position+move] = game.empty;
    }
    return array
}

/* Function to set slides */
function setSlides(gameobject) {
    var x = gameobject.slides
    x = shuffleSlides(x);
    var set = [[x[0], x[1], x[2], x[3], x[4], x[5], x[6], x[7], x[8]]];
    
    for (i=0; i<3; i++) {
        position = (Array.prototype.indexOf.call(set[0],set[0][i]))*200
        set[0][i].style.top = "0px";
        set[0][i].style.left = position.toString()+"px";
    }

	for (i=0; i<3; i++) {
        position = (Array.prototype.indexOf.call(set[1],set[(1*i)]))*200
		set[1][i].style.top = "200px";
		set[1][i].style.left = position.toString()+"px";
    }

	for (i=0; i<3; i++) {
        position = (Array.prototype.indexOf.call(set[2],set[2][i]))*200
		set[2][i].style.top = "400px";
		set[2][i].style.left = position.toString()+"px";
    }
}

/* function linking to other move functions */
function moveSlide(slide){

    if (isRight(slide)){
        moveRight(slide);
    } else if (isLeft(slide)) {
        moveLeft(slide);
    } else if (isTop(slide)){
        moveTop(slide);
    } else if (isDown(slide)){
        moveDown(slide)
    }
}

/* Is slide right function */
function isRight(slide){
    var position = Array.prototype.indexOf.call(game.slides,slide);
	blank_position = position + 1;
	if(Object.is(game.slides[blank_position],game.empty) && position!=5 && position!=2 && position!=8){
        return true;
    }
}

/* Move slide right function */
function moveRight(slide){
    var position = Array.prototype.indexOf.call(game.slides,slide);
    var current_posX = slide.style.left;
    var res = current_posX.split('px')[0];
    current = eval(res);
    slide.style.left = (current+113).toString()+"px";
    var blank_position = Array.prototype.indexOf.call(game.slides,game.empty);
    var current_blank_posX = game.empty.style.left;
    var res_blank = current_blank_posX.split('px')[0];
    var current_blank = eval(res_blank);
    game.empty.style.left = (current_blank-113).toString()+"px"; 
    game.slides[blank_position] = game.slides[position]
    game.slides[position] = game.empty; 
}

/* Is slide left function */
function isLeft(slide){
    var position = Array.prototype.indexOf.call(game.slides,slide);
    blank_position = position - 1;
    if(Object.is(game.slides[blank_position],game.empty) &&  position!=0 && position!=3 && position!=6){
        return true;
    }
}

/* Move slide left function */
function moveLeft(slide){
    var position = Array.prototype.indexOf.call(game.slides,slide);
    var current_posX = slide.style.left;
    var res = current_posX.split('px')[0];
    current = eval(res);
    slide.style.left = (current-113).toString()+"px";
    var blank_position = Array.prototype.indexOf.call(game.slides,game.empty);
    var current_blank_posX = game.empty.style.left;
    var res_blank = current_blank_posX.split('px')[0];
    var current_blank = eval(res_blank);
    game.empty.style.left = (current_blank+113).toString()+"px";
    game.slides[blank_position] = game.slides[position]
    game.slides[position] = game.empty;
}

/* Is slide top function */
function isTop(slide){
    var position = Array.prototype.indexOf.call(game.slides,slide);
    blank_position = position-3;
    if (Object.is(game.slides[blank_position],game.empty)) {
        return true;
    }
}

/* Move slide top function */
function moveTop(slide){
    var position = Array.prototype.indexOf.call(game.slides,slide);
    var current_posY = slide.style.top;
    var res = current_posY.split('px')[0];
    current = eval(res);
    slide.style.top = (current-113).toString()+"px";
    var blank_position = Array.prototype.indexOf.call(game.slides,game.empty);
    var current_blank_posY = game.empty.style.top;
    var res_blank = current_blank_posY.split('px')[0];
    var current_blank = eval(res_blank);
    game.empty.style.top = (current_blank + 113).toString()+"px";
    game.slides[blank_position] = game.slides[position]
    game.slides[position] = game.empty;
}

/* Is slide down function */
function isDown(slide){
    var position = Array.prototype.indexOf.call(game.slides,slide);
    blank_position = position+3;
    if (Object.is(game.slides[blank_position],game.empty)) {
        return true;
    }
}

/* Move slide down function */
function moveDown(slide){
    var position = Array.prototype.indexOf.call(game.slides,slide);
    var current_posY = slide.style.top;
    var res = current_posY.split('px')[0];
    current = eval(res);
    slide.style.top = (current+113).toString()+"px";
    var blank_position = Array.prototype.indexOf.call(game.slides,game.empty);
    var current_blank_posY = game.empty.style.top;
    var res_blank = current_blank_posY.split('px')[0];
    var current_blank = eval(res_blank);
    game.empty.style.top = (current_blank - 113).toString()+"px";
    game.slides[blank_position] = game.slides[position]
    game.slides[position] = game.empty;
}

function checkBoard(board,winboard){
    for(i=0; i<board.length; i++){
        if(board[i]!=winboard[i]){
            return false
        } else {
            return true;
        }
    }
}

function win() {
    if(isEqual(game.slides,game.win)){
        setTimeout(function(){ alert("You win!"); }, 500);
    }
}

(function (global) {
    setGameImage();
	slideClick();
	setSlides(global);
}(game));