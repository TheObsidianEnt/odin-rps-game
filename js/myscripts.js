const choices = ['ROCK', 'PAPER', 'SCISSORS'];
let playerScore = 0;
let computerScore = 0;


function computerPlay() {
    let rand = choices[Math.floor(Math.random() * choices.length)];
    return rand;
}

function computerWin() {
    let computerScore = computerScore++;
    return computerScore;
}

function playerWin() {
    let playerScore = playerScore++;
    return playerScore;
}

function playRound(playerSelection, computerSelection) {
   // tie condition
    if (playerSelection.toUpperCase() === computerSelection) {
        let results = `It's a tie!`;
        return results;
    // lose conditions
    } else if (playerSelection.toUpperCase() === 'ROCK' && computerSelection === 'PAPER') {
        let results = `You lose :( ${computerSelection} beats ${playerSelection}!`;
        return results;
    } else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection === 'SCISSORS') {
        let results = `You lose :( ${computerSelection} beats ${playerSelection}!`;
        return results;
    } else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection === 'ROCK') {
        let results = `You lose :( ${computerSelection} beats ${playerSelection}!`;
        return results;
    // win conditions
    } else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection === 'ROCK') {
        let results = `You win :) ${playerSelection} beats ${computerSelection}!`;
        return results;
    } else if (playerSelection.toUpperCase() === 'ROCK' && computerSelection === 'SCISSORS') {
        let results = `You win :) ${playerSelection} beats ${computerSelection}!`;
        return results;
    } else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection === 'PAPER') {
        let results = `You win :) ${playerSelection} beats ${computerSelection}!`;
        return results;
    }
}

// const playerSelection = computerPlay();
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));

function game() {
    
}