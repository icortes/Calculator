'use strict';

// function add() {
//   let number1 = parseFloat(document.getElementById('number1').value);
//   let number2 = parseFloat(document.getElementById('number2').value);

//   let total = number1 + number2;

//   document.getElementById('answer').value = total;
// }

// function subtract() {
//   let number1 = parseFloat(document.getElementById('number1').value);
//   let number2 = parseFloat(document.getElementById('number2').value);

//   let total = number1 - number2;

//   document.getElementById('answer').value = total;
// }

// function multiply() {
//   let number1 = parseFloat(document.getElementById('number1').value);
//   let number2 = parseFloat(document.getElementById('number2').value);

//   let total = number1 * number2;

//   document.getElementById('answer').value = total;
// }

// function divide() {
//   let number1 = parseFloat(document.getElementById('number1').value);
//   let number2 = parseFloat(document.getElementById('number2').value);

//   let total = number1 / number2;

//   document.getElementById('answer').value = total;
// }

function init() {
  let number1El = document.getElementById('number1');
  let number2El = document.getElementById('number2');

  let buttons = document.querySelectorAll('button.btn');

  let total;

  // console.log(buttons);

  buttons.forEach((element) => {
    // console.log(element.dataset.operator);
    element.addEventListener('click', () => {
      let number1 = parseFloat(number1El.value);
      let number2 = parseFloat(number2El.value);

      validateNumbers(number1, number2);

      switch (element.dataset.operator) {
        case 'add':
          total = number1 + number2;
          break;
        case 'subtract':
          total = number1 - number2;
          break;
        case 'multiply':
          total = number1 * number2;
          break;
        case 'divide':
          total = number1 / number2;
          break;
        default:
          total = -1;
      }

      document.getElementById('answer').value = total;
    });
  });
}

function validateNumbers(number1, number2) {
  const alert = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
  <strong>Error!</strong> You should check in on some of those fields below.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;

  if (isNaN(number1) || isNaN(number2)) {
    document.getElementById('alert').insertAdjacentHTML('afterbegin', alert);
  }
}

init();
