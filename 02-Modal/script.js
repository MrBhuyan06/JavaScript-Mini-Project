'use strict';
const modal = document.querySelector('.modal');
const btn = document.querySelectorAll('.show-modal');
const overlay = document.querySelector('.overlay');
const closemodal = document.querySelector('.close-modal');

//Open Modal
function openModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

//Close Modal
function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', function (e) {
    openModal();
  });
}
closemodal.addEventListener('click', () => {
  closeModal();
});
