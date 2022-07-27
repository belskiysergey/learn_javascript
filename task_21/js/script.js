// 1. При вводе 3 инпутов и нажатии на кнопку в 4 помещать сумму инпутов.
//    Инпуты не должны быть пустыми и содержать ничего кроме цифр.

// 2. Дан инпут. В него вводится число. По потери фокуса найдите сумму цифр этого числа. 
//    То есть ввожу 15 = ниже под инпутом вывожу значение 6 ( 1 + 5)

const firstInput = document.querySelector('input[data-name="first"]');
const secondInput = document.querySelector('input[data-name="second"]');
const thirdInput = document.querySelector('input[data-name="third"]');
const allSumInput = document.querySelector('input[data-name="allSumInput"]');
const submitBtn = document.querySelector('input[data-submit="totalSum"]');

let valueFist   = "";
let valueSecond = "";
let valueThird  = "";

firstInput.addEventListener('keyup', (e) => {
  if (isNaN(+((e.target.value).trim()))) {
    e.target.value = "";
  } else {
    valueFist = e.target.value;
  }
});
secondInput.addEventListener('keyup', (e) => {
  if (isNaN(+((e.target.value).trim()))) {
    e.target.value = "";
  } else {
    valueSecond = e.target.value;
  }
});
thirdInput.addEventListener('keyup', (e) => {
  if (isNaN(+((e.target.value).trim()))) {
    e.target.value = "";
  } else {
    valueThird = e.target.value;
  }
});

function sum(a, b, c) {
  return a + b + c;
}

submitBtn.addEventListener('click', (e) => {
  let sumNumbers = sum(+valueFist, +valueSecond, +valueThird);
  allSumInput.value = sumNumbers;

  firstInput.value = "";
  valueFist = "";

  secondInput.value = "";
  valueSecond = "";

  thirdInput.value = "";
  valueThird = "";
});

//------------------------------task_2-------------------------------------

const focusInp = document.querySelector('input[data-name="focusInp"]');

let valueFourth = undefined; 
let firstArg = undefined;
let secondArg = undefined;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

focusInp.addEventListener('change', (e) => {
  if ((isNaN(+((e.target.value).trim()))) || (+((e.target.value).trim()) === 1)) {
    e.target.value = "";
  } else {
    valueFourth = Math.ceil(e.target.value);

    let maximum = valueFourth;
    const minimum = 1; 

    do {
      firstArg = getRandomInt(minimum, +maximum);
      secondArg = getRandomInt(minimum, +maximum);
    } while(firstArg + secondArg !== +maximum);

    focusInp.insertAdjacentHTML('afterend', `<div>${firstArg} + ${secondArg}</div>`);
    
    e.target.value = "";
  }
});

