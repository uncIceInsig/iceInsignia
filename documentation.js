//Documentation
var board = new Array(new Array());
var playerOneTeam = new Array();
var PlayerTwoTeam = new Array();
/*
Array for holding all of the players' Characters
It will also hold Terrain objects whose only value will be a string:
"Water" or "Land" or "Rock"
Depending on the type, the board will be drawn based on it
*/
game(Player One, Player Two)
/*
Initialize the class with the Two Player objects
This will call the game loop after any variables have been gotten from
the players such as their team composition
Methods that will neeed to be called after the game has started:
setTerrian()
redraw()
*/

queryBoard(x, y)
/*
queryBoard has to parameters that will be used to check if anything is in
a specific index in the game board
Return types will either be Terrain, Player One's Character
or Player Two's Character
*/

gameLoop(playerOne, playerTwo)
/*
This is the main gap loop that will make calls to other methods for gameplay.
Ideally it will have a while(true) loop encompassing the entire methods
This method, depending on whose turn it is, cycles through their team Array and
asks for moves
*/

setPosition(oldX, oldY, newX, new Y)
/*
Moves pieces from one index to another
This method is called when the Player moves
There will also need to be a redraw method for any movement/state updates
*/

setTerrain(x, y, Terrain)
/*
This method will probably be called once upon creation of the game. To populate,
it is best to use nested for loops and have designated portions of the board
for certain terrain. redraw()
x = 0 and y = 0 + 5 will be Player One's team
x = board length and y = length - 5 will be Player Two's team
*/

redraw()
/*
Runs through each index of the game board and depending on the entry, will
create a corresponding HTML table element as a String such as
"<td id = rock></td>" or "<td class = PlayerOne id = mage></td>"
After it has cycled through the board, it will need to update the page
using jQuery
*/
