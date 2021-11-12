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
    scoreCount.textContent = 'You have ' + playerCount + ' points, computer has ' + computerCount + ' points';
    if (playerCount === 5) {
        finalResult.textContent = 'Congratulations! You\'ve won!';
        rock.style.display = 'none';
        paper.style.display = 'none';
        scissors.style.display = 'none';
    } else if (computerCount === 5) {
        finalResult.textContent = 'Ouch, Computer whooped ya this time!';
        rock.style.display = 'none';
        paper.style.display = 'none';
        scissors.style.display = 'none';
    } 
};

//create function for a round of play that accepts player and computer selection
function playRound(playerSelection) {

    computerPlay();
    //create variable that prompts for playerSelection
 /*   let playerSelection = prompt('Rock, Paper, or Scissors?', 'Choose Wisely!');
    console.log(playerSelection);
    //make sure choice is valid, if so get computerSelection, if not prompt again
    if (playerSelection.toLowerCase() === 'rock' || playerSelection.toLowerCase() === 'paper' || playerSelection.toLowerCase() === 'scissors') {
        computerPlay();
    } else {
        playRound();
        return;
    }    */
    //evaluate win, loss, or tie, report result, and track score
    if (playerSelection === 'rock' && computerSelection === 'Rock') {
        results.textContent = 'Rock and rock, it\'s a tie!';
        score();
    } else if (playerSelection === 'rock' && computerSelection === 'Paper') {
        results.textContent = 'Paper covers rock, you lose!';
        computerWin();
        score();
    } else if (playerSelection === 'rock' && computerSelection === 'Scissors') {
        results.textContent = 'Rock bashes scissors, you win!';
        playerWin();
        score();
    } else if (playerSelection === 'paper' && computerSelection === 'Paper') {
        results.textContent = 'Paper and paper, it\'s a tie!';
        score();
    } else if (playerSelection === 'paper' && computerSelection === 'Rock') {
        results.textContent = 'Paper covers rock, you win!';
        playerWin();
        score();
    } else if (playerSelection === 'paper' && computerSelection === 'Scissors') {
        results.textContent = 'Scissors shred paper, you lose!';
        computerWin();
        score();
    } else if (playerSelection === 'scissors' && computerSelection === 'Scissors') {
        results.textContent = 'Scissors and scissors, it\'s a tie!';
        score();
    } else if (playerSelection === 'scissors' && computerSelection === 'Rock') {
        results.textContent = 'Rock bashes scissors, you lose!';
        computerWin();
        score();
    } else if (playerSelection === 'scissors' && computerSelection === 'Paper') {
        results.textContent = 'Scissors shreds paper, you win!';
        playerWin();
        score();
    }

}

//create loop that runs 5 rounds, then report overall result after 5 rounds
function game() {
 /*   for (let i = 0; i < 5; i++) {
        playRound();
    }  */
    if (playerCount > computerCount) {
        return('Congratulations, you won!');
    } else if (computerCount > playerCount) {
        return('Looks like you\'ve lost this one');
    } else {
        return('You tied! At least you didn\'t lose...');
    }
    
}
//make buttons play a round with corresponsing playerSelection
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', (e) => playRound('rock'));
paper.addEventListener('click', (e) => playRound('paper'));
scissors.addEventListener('click', (e) => playRound('scissors'));

//make results dislpay in div on page instead of console.log
const results = document.querySelector('.results');

//make score count display in div
const scoreCount = document.querySelector('.score');

//make final result display in div
const finalResult = document.querySelector('.finalResult');

const buttons = document.querySelector('button');