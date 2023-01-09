let playerWon = 0;
let computerWon = 0;
let roundNumber = 0;

function getComputerChoice () {

    const computerChoice = Math.floor(Math.random() * 3)+1;

    switch (computerChoice) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    }

}


function playRound (playerSelection, computerSelection) {

    if ( playerSelection === "rock" && computerSelection === "rock" ) {
        return "Draw! No one won.", roundNumber++;
    }
    else if ( playerSelection === "rock" && computerSelection === "paper" ) {
        console.log("Paper beats Rock! Computer won.");
        return computerWon++, roundNumber++;
    }
    else if ( playerSelection === "rock" && computerSelection === "scissors" ) {
        console.log("Rock beats Scissors! Player won.");
        return  playerWon++, roundNumber++;
    } //
    else if ( playerSelection === "paper" && computerSelection === "paper") {
        return "Draw! No one won.", roundNumber++;
    }
    else if ( playerSelection === "paper" && computerSelection === "rock") {
        console.log("Paper beats Rock! Player won.");
        return playerWon++, roundNumber++;
    }
    else if ( playerSelection === "paper" && computerSelection === "scissors") {
        console.log("Scissors beats Paper! Computer won.");
        return computerWon++, roundNumber++;
    }//
    else if ( playerSelection === "scissors" && computerSelection === "scissors") {
        return "Draw! No one won.", roundNumber++;
    }
    else if ( playerSelection === "scissors" && computerSelection === "paper") {
        console.log("Scissors beats Paper! Player won.");
        return playerWon++, roundNumber++;
    }
    else {
        console.log("Rock beats Scissors! Computer won.");
        return computerWon++, roundNumber++;
    }

}


function game() {


    for (let i = 0; i < 5; i++) {

        let playerSelection = window.prompt("Rock, Paper, Scissors: What's your choice?");
        let computerSelection = getComputerChoice();

        console.log(playRound(playerSelection, computerSelection));
        console.log("Round " + roundNumber);
        console.log("Player: "+ playerWon + " - " + "Computer: " + computerWon);

        if (roundNumber === 5) {

            if (playerWon > computerWon) {
                console.log("Player is the big winner!");
            }
            else {
                console.log("Computer is the big winner!")
            }

        }

    }

}

game();