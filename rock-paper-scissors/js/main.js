$(document).ready(function(){

  let playerChoice;
  let computerChoice;
  let score = 0;
  let cpuScore = 0;
  const playerWeapon = $('.playerWeapon');
  const computerWeapon = $('.computerWeapon');
  const rock = $('.rock');
  const paper = $('.paper');
  const scissors = $('.scissors');


    rock.click(function(){
      playerChoice = 'rock';
      playerWeapon.append(rock);
      compChoice();
      setTimeout(function(){
        alert(checkWinner());
      }, 300);
      setTimeout(function(){
        $('.choices').append(rock);
      }, 700);
    });

    paper.click(function () {
      playerChoice = 'paper';
      playerWeapon.append(paper);
      compChoice();
      setTimeout(function(){
        alert(checkWinner());
      }, 300);
      setTimeout(function (){
        $('.choices').append(paper);
      }, 700);
    });

    scissors.click(function () {
      playerChoice = 'scissors';
      playerWeapon.append(scissors);
      compChoice();
      setTimeout(function(){
        alert(checkWinner());
      }, 250);
      setTimeout(function (){
        $('.choices').append(scissors);
      }, 700);
    });

    let resetBtn = $('.restart-Btn');
      resetBtn.click(function() {
        window.location.reload();
      })

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
        computerScore();
      } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        result = 'You win!';
        playerScore();
      } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        result = 'You win!';
        playerScore();
      } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
        result = 'You lose!';
        computerScore();
      } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
        result = 'You lose!';
        computerScore();
      } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        result = 'You win!'
        playerScore();
      }
      return result;
    };

    function playerScore () {
      score = score + 1;
      $('.userScore').append(score);
      $('.userScore').html(score);
      if (score === 5) {
        //placeholder
        alert('You are awesome!')
      }
    };

    function computerScore () {
      cpuScore = cpuScore + 1;
      $('.compScore').append(cpuScore);
      $('.compScore').html(cpuScore);
      if (cpuScore === 5) {
        //placeholder
          alert('You are terrible');
      }
    }


























































});
