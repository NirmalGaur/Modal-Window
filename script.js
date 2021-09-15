'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
// to open modal window on clicking 3 show modal buttons
for (let i = 0; i < btnShowModal.length; i++)
  btnShowModal[i].addEventListener('click', openModal);
// to close modal window when X is clicked or when blurr area is clicked
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
// to close modal window when esc key is pressed on the keyboard
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) closeModal(); // if modal is already hidden then nothing should happen when we press esc key
  }
});
