'use strict';

//Selecting Elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

console.log(diceEl);
console.log(score0El.textContent);
console.log(score1El.textContent);

//Staring conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  //1.Generation a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  //2.Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  //3.check for rolled 1: if true , Switch to next player
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;
    //TODO CHANGE LATER
    current0El.textContent = currentScore;
  }
  //switch to next Player
  else {
  }
});
