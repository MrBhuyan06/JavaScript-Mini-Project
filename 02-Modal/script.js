'use strict';
const modal = document.querySelector('.modal');
const btn = document.querySelectorAll('.show-modal');
const overlay = document.querySelector('.overlay');
const closemodal = document.querySelector('.close-modal');
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', function (e) {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}
closemodal.addEventListener('click', () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});
