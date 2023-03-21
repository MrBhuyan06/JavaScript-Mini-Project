'use strict';

let guessNumber = Math.trunc(Math.random() * 20) + 1;
console.log(guessNumber);
let Score = 20;
let higherscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  // acess the input value
  let inputNumber = Number(document.querySelector('.guess').value);
  console.log(inputNumber);
  //First condition if User didnot enter any Think
  if (!inputNumber) {
    document.querySelector('.message').textContent = '🙏Please enter the Value';
  }
  //Second check is the guess number is equal to the input number
  else if (guessNumber === inputNumber) {
    document.querySelector('.message').textContent =
      '🏆 You won the match Buddy';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = guessNumber;
    document.querySelector('.number').style.width = '30rem';

    if (Score > higherscore) {
      higherscore = Score;
      document.querySelector('.highscore').textContent = higherscore;
    }
  } else if (guessNumber !== inputNumber) {
    if (Score > 1) {
      inputNumber > guessNumber
        ? (document.querySelector('.message').textContent = '📈 Too High')
        : (document.querySelector('.message').textContent = '📈 Too Low');
      Score--;
      document.querySelector('.score').textContent = Score;
    } else {
      document.querySelector('.message').textContent =
        '🫂OOPS you losed the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});
