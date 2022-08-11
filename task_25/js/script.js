// навесить стили, добавить картинки на активности и на желаемый результат
// выводить значение роста при его смене
// при нажатии на Next & Prev переключатся между блоками

let firstBlock = document.querySelector('.block_1');             // блок первый
// console.log("блок первый: " + firstBlock);

let secondBlock = document.querySelector('.block_2');            // блок активности
// console.log("блок активности: " + secondBlock);

let thirdBlock = document.querySelector('.block_3');             // блок цели
// console.log("блок цели: " + thirdBlock);

let fourthBlock = document.querySelector('.block_4');            // блок результата
// console.log("блок результата: " + fourthBlock);

let result = document.querySelector('.result');                  // результат
// console.log("результат: " + result);

let male = document.getElementById('male');                      // мужской пол
// console.log("мужской пол: " + male);

let female = document.getElementById('female');                  // женский пол
// console.log("женский пол: " + female);

let growth = document.getElementById('growth');                  // рост
// console.log("рост: " + growth);

let currentWeight = document.getElementById('currentWeight');    // текущий вес
// console.log("текущий вес: " + currentWeight);

let desiredWeight = document.getElementById('desiredWeight');    // цель
// console.log("цель: " + desiredWeight);

let yourActivity = document.getElementById('yourActivity');      // ваша активность
// console.log("ваша активность: " + yourActivity);

let chosenHeight = document.getElementById('chosenHeight');      // span для вывода роста
// console.log("выбранный рост выводим сюда: " + chosenHeight);

let desiredResult = document.getElementById('desiredResult');      // выбрать желаемый результат
// console.log("желаемый результат: " + desiredResult);

let imageYourActive = document.getElementById('imageYourActive');
let imageDesiredResult = document.getElementById('imageDesiredResult');

// переменные кнопок
let firstButtonNext = document.querySelector("button[data-page='2']");
let secondButtonNext = document.querySelector("button[data-page='3']");
let thirdButtonNext = document.querySelector("button[data-page='4']");

let firstButtonPrev = document.querySelector("button[data-page='1']");
let secondButtonPrev = document.querySelector("button[data-page='2']");
let thirdButtonPrev = document.querySelector("button[data-page='3']");

// вспомогательные переменные 

let maleGender = false;                                          // мужской пол
let femaleGender = false;                                        // женский пол
let chosenHeightValue = 130;                                     // рост
let userWeight = "";                                             // текущий вес пользователя
let desiredUserWeight = "";                                      // желаемый вес пользователя
let yourActivityValue = "normal";                                // активность пользователя
let desiredResultValue = "weight support";                       // желаемый результат

male.addEventListener('change', (e) => {                         // мужской пол
  maleGender = e.target.value;
  femaleGender = false;
});
female.addEventListener('change', (e) => {                       // женский пол
  femaleGender = e.target.value;
  maleGender = false;
});
growth.addEventListener('input', (e) => {                        // рост
  chosenHeightValue = e.target.value;
  chosenHeight.innerHTML = chosenHeightValue + " см";
});
currentWeight.addEventListener('change', (e) => {                // текущий вес пользователя
  if (isNaN(+((e.target.value).trim()))) {
    userWeight = "";
  } else {
    userWeight = Number(e.target.value);
    console.log(userWeight);
  }
});
desiredWeight.addEventListener('change', (e) => {                // желаемый вес пользователя
  if (isNaN(+((e.target.value).trim()))) {
    desiredUserWeight = "";
  } else {
    desiredUserWeight = Number(e.target.value);
    console.log(desiredUserWeight);
  }
});
yourActivity.addEventListener('input', (e) => {                  // активность пользователя
  yourActivityValue = e.target.value;

  switch (yourActivityValue) {
    case '1':
      imageYourActive.innerHTML = `<img src="img/pas.png">`;
      break;
    case '2':
      imageYourActive.innerHTML = `<img src="img/norm.png">`;
      break;
    case '3':
      imageYourActive.innerHTML = `<img src="img/active.png">`;
      break;
  }
});
desiredResult.addEventListener('input', (e) => {                 // желаемый результат
  desiredResultValue = e.target.value;

  switch (desiredResultValue) {
    case '1':
      imageDesiredResult.innerHTML = `<img src="img/lose_weight.png">`;
      break;
    case '2':
      imageDesiredResult.innerHTML = `<img src="img/maintain_weight.png">`;
      break;
    case '3':
      imageDesiredResult.innerHTML = `<img src="img/get_fat.png">`;
      break;
  }
});

// кнопки Next
firstButtonNext.addEventListener('click', (e) => {
  firstBlock.style.display = "none";
  secondBlock.style.display = "block";
});
secondButtonNext.addEventListener('click', (e) => {
  secondBlock.style.display = "none";
  thirdBlock.style.display = "block";
});
thirdButtonNext.addEventListener('click', (e) => {
  thirdBlock.style.display = "none";
  fourthBlock.style.display = "block";
});

// кнопки Prev
thirdButtonPrev.addEventListener('click', (e) => {
  fourthBlock.style.display = "none";
  thirdBlock.style.display = "block";
});
secondButtonPrev.addEventListener('click', (e) => {
  thirdBlock.style.display = "none";
  secondBlock.style.display = "block";
});
firstButtonPrev.addEventListener('click', (e) => {
  secondBlock.style.display = "none";
  firstBlock.style.display = "block";
});
