//
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i",
					"j", "k", "l", "m", "n", "o", "p", "q", "r", 
					"s", "t", "u", "v", "w", 
					"x", "y", "z"];
//Keeps track of score					
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var yourGuesses = "";

//Picks a random letter from Array.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log("computerGuess=" + computerGuess)


document.onkeyup = function (event) {
console.log(event);

	if (guessesLeft > 0) {
		// decrement guesses that are left
	    guessesLeft--
    }
    else {
        guessesLeft = 9
    }
	

var userGuess = event.key;

var gameWins = document.getElementById("wins");
gameWins.textContent = "wins:" + wins;

var gameLosses = document.getElementById("losses");
gameLosses.textContent = "losses:" + losses;

var userGuesses = document.getElementById("guessesleft");
userGuesses.textContent = "guesses left: " + guessesLeft;
	


	if (userGuess == computerGuess) {
		wins++; //++; increases by one
		// startGame();
	}
	else if (guessesLeft == 0) {
		losses++
		// startGame(); 
	}

// puts letters on screen that user has guessed
	if (computerChoices.includes(userGuess)){
		if (yourGuesses == "" ) {
			yourGuesses = userGuess;
		}
		else {
			yourGuesses = yourGuesses + ", " + userGuess;
		}
	// yourGuesses = yourGuesses + userGuess
var guessonscreen = document.getElementById("yourGuesses")
guessonscreen.textContent = "your guesses so far: " + yourGuesses;
}
	


}


// function startGame() {
// 	reset counter to 9
// 	clears the letter box


   