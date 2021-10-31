//create function computerPlay() that randomly puts rock, paper, or scissors into variable
let computerSelection
function computerPlay() {
    let rockPaperScissors = ['Rock', 'Paper', 'Scissors'];
    computerSelection = rockPaperScissors[Math.floor(Math.random()*rockPaperScissors.length)];
    console.log(computerSelection);
}

//create functions for scorekeeping
let playerCount = 0;
let computerCount = 0;
function playerWin() {
    playerCount = playerCount + 1;
}
function computerWin() {
    computerCount = computerCount + 1;
}
function score() {
    console.log('You have ' + playerCount + ' points, computer has ' + computerCount + ' points');
}

//create function for a round of play that accepts player and computer selection
function playRound() {
    //create variable that prompts for playerSelection
    let playerSelection = prompt('Rock, Paper, or Scissors?', 'Choose Wisely!');
    console.log(playerSelection);
    //make sure choice is valid, if so get computerSelection, if not prompt again
    if (playerSelection.toLowerCase() === 'rock' || playerSelection.toLowerCase() === 'paper' || playerSelection.toLowerCase() === 'scissors') {
        computerPlay();
    } else {
        playRound();
        return;
    }
    //evaluate win, loss, or tie, report result, and track score
    if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'Rock') {
        console.log('Rock and rock, it\'s a tie!');
        score();
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'Paper') {
        console.log('Paper covers rock, you lose!');
        computerWin();
        score();
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'Scissors') {
        console.log('Rock bashes scissors, you win!');
        playerWin();
        score();
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'Paper') {
        console.log('Paper and paper, it\'s a tie!');
        score();
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'Rock') {
        console.log('Paper covers rock, you win!');
        playerWin();
        score();
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'Scissors') {
        console.log('Scissors shred paper, you lose!');
        computerWin();
        score();
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'Scissors') {
        console.log('Scissors and scissors, it\'s a tie!');
        score();
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'Rock') {
        console.log('Rock bashes scissors, you lose!');
        computerWin();
        score();
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'Paper') {
        console.log('Scissors shreds paper, you win!');
        playerWin();
        score();
    }

}

//create loop that runs 5 rounds, then report overall result after 5 rounds
function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    if (playerCount > computerCount) {
        return('Congratulations, you won!');
    } else if (computerCount > playerCount) {
        return('Looks like you\'ve lost this one');
    } else {
        return('You tied! At least you didn\'t lose...');
    }
    
}
