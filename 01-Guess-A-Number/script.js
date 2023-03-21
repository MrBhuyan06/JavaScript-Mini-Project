'use strict';

let guessNumber = Math.trunc(Math.random() * 20) + 1;
console.log(guessNumber);
let Score = 20;
let higherscore;

document.querySelector('.number').textContent = guessNumber;

let inputNumber = Number(document.querySelector('.guess').textContent);
console.log(inputNumber);

document.querySelector('.check').addEventListener('click', function () {
  //First condition if User didnot enter any Think
  if (!inputNumber) {
    document.querySelector('.message').textContent = '🙏Please enter the Value';
  }
  console.log('Inside function');
});
