var game = new Object();
/* Defines the game board */
game.tiles = Array.from(document.getElementsByClassName('tile'));
/* Defines the game folders */
game.folders = ["bluelight","graffitiHat","graffitiWall","greenscreen","pinkBench","pinkWindows"];
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
