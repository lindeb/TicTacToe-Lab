var status = document.getElementById("status");

var tiles = document.getElementsByClassName("tiles");

var turns = document.getElementsByClassName("clicked");  // counts the number of turns

// add click event listener to all tiles
for (var i = 0; i < tiles.length; i++) {
	tiles[i].addEventListener("click", mark);
}

// 
function mark(event) {
	if(turns.length%2 === 0) {  // Player One
		// event.target.setAttribute("class", "tiles X");
		event.target.classList.add("clicked", "X");	
		// event.target.innerHTML = "X";
		event.target.innerHTML = "<img src='./images/sheldon.png'>"
		document.getElementById("status").innerHTML = "Player Two's turn!";
	} 
	else {
		event.target.classList.add("clicked", "O");  // Player Two
		// event.target.innerHTML = "O";
		event.target.innerHTML = "<img src='./images/amy.png'>"
		document.getElementById("status").innerHTML = "Player One's turn!";
	}
	event.target.removeEventListener("click", mark);
	checkForWinner();
}



// define winning combinations
var winningCombos = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
var playerOne = document.getElementsByClassName("X");
var playerTwo = document.getElementsByClassName("O"); // how to convert elements into an array of index numbers?

function checkForWinner() {
	for(var j = 0; j < winningCombos.length; j++) {
		playerOne.sort(function(a, b) {return a-b});			
		// if(playerOne.indexOf(j) != -1) {
		if(playerOne[0] == winningCombos[j][0] && playerOne[1] == winningCombos[j][1] && playerOne[2] == winningCombos[j][2]) {
			document.getElementById("status").innerHTML = "BAZINGA! Player One wins!";
		}
		else if	(playerTwo[0] == winningCombos[j][0] && playerTwo[1] == winningCombos[j][1] && playerTwo[2] == winningCombos[j][2]) {
			document.getElementById("status").innerHTML = "BAZINGA! Player Two wins!";
		}
			
	}
}


// clear the board when you click the reset button
document.getElementById("reset").addEventListener("click", clearBoard);

function clearBoard() {
	for (var i = 0; i < tiles.length; i++ ) {
		tiles[i].setAttribute("class", "tiles");
		tiles[i].innerHTML = "";
		tiles[i].addEventListener("click", mark);
	}
}