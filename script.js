'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct number 🎉';
// console.log(
//   (document.querySelector('.message').textContent = 'Correct number 🎉')
// );

// document.querySelector('.number').textContent = 14;

// document.querySelector('.guess').value = 600;
// console.log(document.querySelector('.guess').value);

// document.querySelector('.score').textContent = 13;

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent =
      '✋ You must enter a number.';
  }
});
