<script>
//the thing that holds all info until everything has loaded on the page
window.onload = function () {
// Identify the letter choices
var letters = {"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"}
// Identify the other variables
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesMade = [];

// Computer makes a random guess
var computerGuess = letters[Math.floor(Math.random() * letters.length)];


// Process/store info of user selection
document.onkeyup = function(event) {
	var userGuess = event.key;
}

//User guess updates guessesLeft, guessesMade, and wins or losses.
$("alreadyguessed").on("click", function() {
	guessesMade = $(this).attr("letters");
}
// is the above the same as this function but in jquery? 
function updateGuessesMade() {
	document.querySelector("#lettersGuessed").innerHTML = "Letters guessed:" + guessesMade;

}

function updateGuessesLeft() {
	document.querySelector("#remainder").innerHTML = "Number of tries left:" + guessesLeft;
}

// determine if letter selected matches computer letter selection

function determineMatch() {
	if (letters <= ())
		wins += i;
}

if (userGuess === computerGuess) {
	guessesLeft--;
	alert ("You win!");
}

else if (userGuess != computerGuess) {
	guessesLeft--;
	alert("Nope. Try again!");

//reset game without refreshing

reset();

    

    
