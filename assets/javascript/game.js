//VAR
var targetNumber;

var originalNumbers = [10, 5, 3, 7]

var crystalNumbers = [];

var newValue = 0;

var clickValue = 0;

var score = 0;

var wins = 0;

var losses = 0;

var isnew;



//FUNCTIONS

//randomizes target number and creates 4 new values for the crystals
function randomizer() {

    targetNumber = Math.floor(Math.random() * 100) + 11;

    $("#guessme").text(targetNumber);

    for (i = 0; i < 4; i++) {

        var x = Math.floor(Math.random() * originalNumbers.length) 

        newValue = parseInt(originalNumbers[x]);

        originalNumbers.splice(x, 1)

        crystalNumbers.push(newValue);
            

        }

    }



//resets the game
function resetter () {

    originalNumbers = [10, 5, 3, 7];

    crystalNumbers = [];

    randomizer();

    score = 0;

    $("#total").text(score);

}



//SCRIPT

$(function() {

//runs randomizer to set first number value

    randomizer();

//when crystal is clicked

    $(".crystal").on("click", function() {

//check value (stored in html attribute)

        var x = ($(this).attr("crystalno"));

//make this value a number so we can work math on it

        clickValue = parseInt(crystalNumbers[x]);

//add this to the total score

        score = score + clickValue;

//update page total for player

        $("#total").text(score);

//This checks to see after a click is made if there is a win/loss

        if (score === targetNumber) {

//updates and adds score to HTML

            wins = wins + 1;

            $("#wins").text(wins)

//runs resetter function to bring game state back to beginning state

            resetter();
//else checks if score goes over, giving a loss to the player and running resetter
        } else if (score > targetNumber) {

            losses = losses + 1;
            $("#losses").text(losses)

            resetter();

        }

    })
});