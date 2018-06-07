$(document).ready(function(){

  let playerChoice = undefined;
  let computerChoice = undefined;
  const rock = $('#rock');
  const paper = $('#paper');
  const scissors = $('#scissors');


    rock.click(function(){
      playerChoice = 'rock';
    });

    paper.click(function () {
      playerChoice = 'paper';
    });

    scissors.click(function () {
      playerChoice = 'scissors';
    });

    function compChoice () {
      computerChoice = Math.floor(Math.random() * 3) + 1;
      if (computerChoice === 1) {
        computerChoice = 'rock';
      } else if (computerChoice === 2) {
        computerChoice = 'paper';
      } else {
        computerChoice = 'scissors';
      }
    };

    function checkWinner () {
      let result;
      if (playerChoice === computerChoice) {
        result = 'Tie!';
      } else if (playerChoice === 'rock' && computerChoice === 'paper') {
        result = 'You lose!';
      } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        result = 'You win!';
      } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        result = 'You win!';
      } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
        result = 'You lose!';
      } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
        result = 'You lose!';
      } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        result = 'You win!'
      }
    };
























































});
