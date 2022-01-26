// give the computer choices
const choices = ['ROCK', 'PAPER', 'SCISSORS'];
// declares scores
let playerScore = 0;
let computerScore = 0;

// lets the computer choose from choices 
function computerPlay() {
    let rand = choices[Math.floor(Math.random() * choices.length)];
    return rand;
}

// adds 1 to the winners score and prints the scores
function winCondition(winner) {
    if (winner === 'player') {
        ++playerScore;
        console.log(`Your Score: ${playerScore} | Computer Score: ${computerScore}`);
    } else if (winner === 'computer') {
        ++computerScore;
        console.log(`Your Score: ${playerScore} | Computer Score: ${computerScore}`);
    } 
}

// rules for one round of the game
function playRound(playerSelection, computerSelection) {
// tie condition
    if (playerSelection.toUpperCase() === computerSelection) {
        let results = `It's a tie!`;
        return results;
// lose conditions
    } else if (playerSelection.toUpperCase() === 'ROCK' && computerSelection === 'PAPER') {
        let results = `You lose :( ${computerSelection} beats ${playerSelection}!`
        winCondition('computer');
        return results;
    } else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection === 'SCISSORS') {
        let results = `You lose :( ${computerSelection} beats ${playerSelection}!`;
        winCondition('computer');
        return results;
    } else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection === 'ROCK') {
        let results = `You lose :( ${computerSelection} beats ${playerSelection}!`;
        winCondition('computer');
        return results;
// win conditions
    } else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection === 'ROCK') {
        let results = `You win :) ${playerSelection} beats ${computerSelection}!`;
        winCondition('player');
        return results;
    } else if (playerSelection.toUpperCase() === 'ROCK' && computerSelection === 'SCISSORS') {
        let results = `You win :) ${playerSelection} beats ${computerSelection}!`;
        winCondition('player');
        return results;
    } else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection === 'PAPER') {
        let results = `You win :) ${playerSelection} beats ${computerSelection}!`;
        winCondition('player');
        return results;
    }
}

// main game function
function game() {
    while (computerScore < 5 && playerScore < 5) {
        let playerSelection = prompt("Choose rock, paper, or scissors:").toUpperCase();
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        winnerChickenDinner();
    }
}

// declares the winner when one score reaches 5
function winnerChickenDinner() {
    if (playerScore === 5) {
        alert('Player Wins!!' + `\nFinal Score: You: ${playerScore} | Computer: ${computerScore}`);
    } else if (computerScore === 5) {
        alert('Computer Wins!!' + `\nFinal Score: You: ${playerScore} | Computer: ${computerScore}`)
    }
}
