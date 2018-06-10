$(document).ready(function(){

  let playerChoice;
  let computerChoice;
  let score = 0;
  let cpuScore = 0;
  const playerWeapon = $('.playerWeapon');
  const computerWeapon = $('.cpuWeapon');
  const rock = $('.rock');
  const paper = $('.paper');
  const scissors = $('.scissors');
  const cpuRock = $('.cpu-rock');
  const cpuPaper = $('.cpu-paper');
  const cpuScissors = $('.cpu-scissors');


//Player on click function
    rock.click(function(){
      playerChoice = 'rock';
      playerWeapon.append(rock);
      rock.css('width', '300px');
      rock.css('height', '300px');
      $('.vs-logo').css('display', 'block');
      compChoice();
      setTimeout(function(){
        checkWinner();
      }, 1000);
      setTimeout(function(){
        rock.removeClass('rock-scale');
        $('.choices').append(rock);
        rock.css('width', '100px');
        rock.css('height', '100px');
        $('.vs-logo').css('display', 'none');
        $('.tie-announcer').css('display', 'none');
        $('.lose-announcer').css('display', 'none');
        $('.win-announcer').css('display', 'none');
      }, 2000);
    });

    paper.click(function () {
      playerChoice = 'paper';
      playerWeapon.append(paper);
      paper.css('width', '300px');
      paper.css('height', '300px');
      $('.vs-logo').css('display', 'block');
      compChoice();
      setTimeout(function(){
        checkWinner();
      }, 1000);
      setTimeout(function (){
        $('.choices').append(paper);
        paper.css('width', '100px');
        paper.css('height', '100px');
        $('.vs-logo').css('display', 'none');
        $('.tie-announcer').css('display', 'none');
        $('.lose-announcer').css('display', 'none');
        $('.win-announcer').css('display', 'none');
      }, 2000);
    });

    scissors.click(function () {
      playerChoice = 'scissors';
      scissors.css('width', '300px');
      scissors.css('height', '300px');
      playerWeapon.append(scissors);
      $('.vs-logo').css('display', 'block');
      compChoice();
      setTimeout(function(){
        checkWinner();
      }, 1000);
      setTimeout(function (){
        $('.choices').append(scissors);
        scissors.css('width', '100px');
        scissors.css('height', '100px');
        $('.vs-logo').css('display', 'none');
        $('.tie-announcer').css('display', 'none');
        $('.lose-announcer').css('display', 'none');
        $('.win-announcer').css('display', 'none');
      }, 2000);
    });

    //Random computer choice function
    function compChoice () {
      computerChoice = Math.floor(Math.random() * 3) + 1;
      if (computerChoice === 1) {
        computerChoice = 'rock';
        cpuRock.css('display', 'block');
        computerWeapon.append(cpuRock);
        setTimeout(function () {
          checkWinner();
        }, 1000);
        setTimeout(function () {
          cpuRock.css('display', 'none');
        }, 2000);
      } else if (computerChoice === 2) {
        computerChoice = 'paper';
        cpuPaper.css('display', 'block');
        computerWeapon.append(cpuPaper);
        setTimeout(function () {
          checkWinner();
        }, 1000);
        setTimeout(function () {
          cpuPaper.css('display', 'none');
        }, 2000);
      } else {
        computerChoice = 'scissors';
        cpuScissors.css('display', 'block');
        computerWeapon.append(cpuScissors);
        setTimeout(function () {
          checkWinner();
        }, 1000);
        setTimeout(function () {
          cpuScissors.css('display', 'none');
        }, 2000);
      }
      return computerChoice;
    };

    //This function checks for winner based on winning combos.
    function checkWinner () {
      let result;
      if (playerChoice === computerChoice) {
        result = 'Tie!';
        $('.tie-announcer').css('display', 'block');
        $('audio#toasty')[0].play();
      } else if (playerChoice === 'rock' && computerChoice === 'paper') {
        result = 'Round lost!';
        computerScore();
        $('.lose-announcer').css('display', 'block');
      } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        result = 'Round won!';
        playerScore();
        $('.win-announcer').css('display', 'block');
      } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        result = 'Round won!';
        playerScore();
        $('.win-announcer').css('display', 'block');
      } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
        result = 'Round lost!';
        computerScore();
        $('.lose-announcer').css('display', 'block');
      } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
        result = 'Round lost!';
        computerScore();
        $('.lose-announcer').css('display', 'block');
      } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        result = 'Round won!'
        playerScore();
        $('.win-announcer').css('display', 'block');
      }
      return result;
    };

    //Updates player score to the DOM
    function playerScore () {
      score += 1;
      $('.userScore').append(score);
      $('.userScore').html(score);
      if (score === 2) {
        $('audio#win')[0].play();
        setTimeout(function () {
          $('.battle').css('background', 'none');
          $('.game-winner').css('display', 'block');
          $('.restart').css('display', 'block');
          $('.gameover').css('display', 'block');
        }, 1050);
      }
    };

    //Updates computer score to the DOM
    function computerScore () {
      cpuScore += 1;
      $('.compScore').append(cpuScore);
      $('.compScore').html(cpuScore);
      if (cpuScore === 2) {
        $('audio#lose')[0].play();
        setTimeout(function () {
          $('.battle').css('background','none');
          $('.game-loser').css('display', 'block');
          $('.restart').css('display', 'flex');
          $('.gameover').css('display', 'block');
        }, 1050);
      }
    };

  //Reset button that refreshs the page
    let resetBtn = $('.restart-Btn');
      resetBtn.click(function () {
      window.location.reload();
  })


























































});
