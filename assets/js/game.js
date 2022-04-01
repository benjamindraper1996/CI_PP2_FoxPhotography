/**
 * The game.js file is used by the game.html to control the slider puzzle game.
 */
var game = new Object();
// Defines the game board
game.slides = Array.from(document.getElementsByClassName('slide'));
// Defines the game folders
game.folderList = ["bluelight","graffitiHat","graffitiWall","greenscreen","pinkBench","pinkWindows"];
game.gameStarted = false;
// Sets up the game board
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

//Gets variables from gamt.html to declare variables
game.empty = document.getElementById('emptyslide');
game.win = Array.from(document.getElementsByClassName('slide'));
game.gameAreaOuter = document.getElementById('game-area-outer');
game.gameArea = document.getElementById('game-area');
game.gameImg = document.getElementById('game-img');
game.imgSelect = document.getElementsByClassName('img-select');

/**
 * setGameImage sets the game reference image above the slider puzzle.
 * @param folderpath [The path of the folder to pick the updated picture from.]
 */
function setGameImage(folderpath) {
if (folderpath == undefined) {
    var randomFolder = Math.floor((Math.random()*6));
    var folder = game.folderList[randomFolder]
    document.getElementById('gameimage').src = "assets/images/game/"+folder+"/"+"frame.jpg"

    for (i=0;i<game.slides.length; i++) {
        var slideImage = i + 1;
        game.slides[i].style.backgroundImage = "url('"+"assets/images/game/"+folder+"/"+game.img[slideImage]+"')"
    }
} else {
    document.getElementById('gameimage').src = "assets/images/game/"+folderpath+"/"+"frame.jpg"
        for(var i=0;i<game.slides.length;i++) {
            var slideImage = i + 1;
            game.slides[i].style.backgroundImage = "url('"+"assets/images/game/"+folderpath+"/"+game.img[slideImage]+"')"
        }
    }
}

/**
 * slideClick adds the listners for the image selectors and slider tiles then calls the function to move the slide.
 */
function slideClick () {
    for (i=0; i<game.slides.length; i++) {
        game.slides[i].addEventListener('click', function() {
        moveSlide(this);
        win();
    });
}

// Resets and shuffles the game board
for (i=0; i<game.imgSelect.length; i++) {
    game.imgSelect[i].addEventListener('click', function(){
        game.slides = Array.from(document.getElementsByClassName('slide'));
        setGameImage(this.name);
        setSlides(game);
        game.gameArea.style.display = "block";
    });
}
}

/**
 * shuffleSlides randomly shuffles the slides on the board at the start of a new game.
 * @param array [Array numbering the slides positioning]
 * @returns 
 */
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

/**
 * setSlides sets the slides into posistion.
 */
function setSlides() {
var x = game.slides;
x = shuffleSlides(x);
var set = [[x[0],x[1],x[2]],[x[3],x[4],x[5]],[x[6],x[7],x[8]]];

for (i=0; i<3; i++) {
    position = (Array.prototype.indexOf.call(set[0],set[0][i]))*200
    set[0][i].style.top = "0px";
    set[0][i].style.left = position.toString()+"px";
}

for (i=0; i<3; i++) {
    position = (Array.prototype.indexOf.call(set[1],set[1][i]))*200
    set[1][i].style.top = "200px";
    set[1][i].style.left = position.toString()+"px";
}

for (i=0; i<3; i++) {
    position = (Array.prototype.indexOf.call(set[2],set[2][i]))*200
    set[2][i].style.top = "400px";
    set[2][i].style.left = position.toString()+"px";
}
}

/**
 * moveSlide moves the slide clicked on in the given direction.
 * @param slide [The slide to be moved]
 */
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

/**
 * isRight checks the square to the right for the blank square.
 * @param slide [The slide to be moved]
 * @returns 
 */
function isRight(slide){
var position = Array.prototype.indexOf.call(game.slides,slide);
blank_position = position + 1;
if(Object.is(game.slides[blank_position],game.empty) && position!=5 && position!=2 && position!=8){
    return true;
}
}

/**
 * moveRight moves the clicked on slide to the right.
 * @param slide [The slide to be moved]
 */
function moveRight(slide){
var position = Array.prototype.indexOf.call(game.slides,slide);
var current_posX = slide.style.left;
var res = current_posX.split('px')[0];
current = eval(res);
slide.style.left = (current+200).toString()+"px";
var blank_position = Array.prototype.indexOf.call(game.slides,game.empty);
var current_blank_posX = game.empty.style.left;
var res_blank = current_blank_posX.split('px')[0];
var current_blank = eval(res_blank);
game.empty.style.left = (current_blank-200).toString()+"px"; 
game.slides[blank_position] = game.slides[position]
game.slides[position] = game.empty; 
}

/**
 * isLeft checks the square to the left for the blank square.
 * @param slide [The slide to be moved]
 * @returns 
 */
function isLeft(slide){
var position = Array.prototype.indexOf.call(game.slides,slide);
blank_position = position - 1;
if(Object.is(game.slides[blank_position],game.empty) &&  position!=0 && position!=3 && position!=6){
    return true;
}
}

/**
 * moveLeft moves the clicked on slide to the left.
 * @param slide [The slide to be moved]
 */
function moveLeft(slide){
var position = Array.prototype.indexOf.call(game.slides,slide);
var current_posX = slide.style.left;
var res = current_posX.split('px')[0];
current = eval(res);
slide.style.left = (current-200).toString()+"px";
var blank_position = Array.prototype.indexOf.call(game.slides,game.empty);
var current_blank_posX = game.empty.style.left;
var res_blank = current_blank_posX.split('px')[0];
var current_blank = eval(res_blank);
game.empty.style.left = (current_blank+200).toString()+"px";
game.slides[blank_position] = game.slides[position]
game.slides[position] = game.empty;
}

/**
 * isTop checks the square to the top for the blank square.
 * @param slide [The slide to be moved]
 * @returns 
 */
function isTop(slide){
var position = Array.prototype.indexOf.call(game.slides,slide);
blank_position = position-3;
if (Object.is(game.slides[blank_position],game.empty)) {
    return true;
}
}

/**
 * moveTop moves the clicked on slide to the top.
 * @param slide [The slide to be moved]
 */
function moveTop(slide){
var position = Array.prototype.indexOf.call(game.slides,slide);
var current_posY = slide.style.top;
var res = current_posY.split('px')[0];
current = eval(res);
slide.style.top = (current-200).toString()+"px";
var blank_position = Array.prototype.indexOf.call(game.slides,game.empty);
var current_blank_posY = game.empty.style.top;
var res_blank = current_blank_posY.split('px')[0];
var current_blank = eval(res_blank);
game.empty.style.top = (current_blank + 200).toString()+"px";
game.slides[blank_position] = game.slides[position]
game.slides[position] = game.empty;
}

/**
 * isDown checks the square to the down for the blank square.
 * @param slide [The slide to be moved]
 * @returns 
 */
function isDown(slide){
var position = Array.prototype.indexOf.call(game.slides,slide);
blank_position = position+3;
if (Object.is(game.slides[blank_position],game.empty)) {
    return true;
}
}

/**
 * moveDown moves the clicked on slide to the down.
 * @param slide [The slide to be moved]
 */
function moveDown(slide){
var position = Array.prototype.indexOf.call(game.slides,slide);
var current_posY = slide.style.top;
var res = current_posY.split('px')[0];
current = eval(res);
slide.style.top = (current+200).toString()+"px";
var blank_position = Array.prototype.indexOf.call(game.slides,game.empty);
var current_blank_posY = game.empty.style.top;
var res_blank = current_blank_posY.split('px')[0];
var current_blank = eval(res_blank);
game.empty.style.top = (current_blank - 200).toString()+"px";
game.slides[blank_position] = game.slides[position]
game.slides[position] = game.empty;
}

/**
 * checkBoard checks the board against the reference image.
 * @param board [The current state of the game board]
 * @param winboard [The reference image board]
 * @returns 
 */
function checkBoard(board,winboard){
for(i=0; i<board.length; i++){
    if(board[i]!=winboard[i]){
        return false
    }
}
return true;
}

/**
 * win displays an alert when the user has won the game.
 */
function win() {
if(checkBoard(game.slides,game.win)){
    setTimeout(function(){ alert("You win!"); }, 500);
}
}

(function () {
setGameImage();
slideClick();
setSlides();
}(game));