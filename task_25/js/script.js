// навесить стили, добавить картинки на активности и на желаемый результат
// выводить значение роста при его смене
// при нажатии на Next & Prev переключатся между блоками

let firstBlock = document.querySelector('.block_1');             // блок первый
let secondBlock = document.querySelector('.block_2');            // блок активности
let thirdBlock = document.querySelector('.block_3');             // блок цели
let fourthBlock = document.querySelector('.block_4');            // блок результата
let result = document.getElementById('result');                  // результат
let male = document.getElementById('male');                      // мужской пол
let female = document.getElementById('female');                  // женский пол
let growth = document.getElementById('growth');                  // рост
let currentWeight = document.getElementById('currentWeight');    // текущий вес
let yourAge = document.getElementById('yourAge');                // возраст
let yourActivity = document.getElementById('yourActivity');      // ваша активность
let chosenHeight = document.getElementById('chosenHeight');      // span для вывода роста
let desiredResult = document.getElementById('desiredResult');    // выбрать желаемый результат
let imageYourActive = document.getElementById('imageYourActive');
let imageDesiredResult = document.getElementById('imageDesiredResult');

// переменные кнопок
let firstButtonNext = document.getElementById("firstButtonNext");
let secondButtonNext = document.getElementById("secondButtonNext");   
let thirdButtonNext = document.getElementById("thirdButtonNext");
let firstButtonPrev = document.getElementById("firstButtonPrev");
let secondButtonPrev = document.getElementById("secondButtonPrev");
let thirdButtonPrev = document.getElementById("thirdButtonPrev");   

// вспомогательные переменные 
let maleGender = false;                                          // мужской пол
let femaleGender = false;                                        // женский пол
let chosenHeightValue = 130;                                     // рост
let userWeight = "";                                             // текущий вес пользователя
let userAge = "";                                                // возраст
let yourActivityValue = "";                                      // активность пользователя
let desiredResultValue = "";                                     // желаемый результат

// вычислительные переменные
let basicMetabolism = "";
let activity = 1.38;                                             // коэффициент активности
let caloricСoefficient = 0;                                      // коэффициент калорийности
let calories = "";

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
currentWeight.addEventListener('keyup', (e) => {                 // текущий вес пользователя
  if (isNaN(+((e.target.value).trim()))) {
    e.target.value = "";
  } else {
    userWeight = Number(e.target.value);
  }
});
yourAge.addEventListener('keyup', (e) => {                       // возраст
  if (isNaN(+((e.target.value).trim()))) {
    e.target.value = "";
  } else {
    userAge = Number(e.target.value);
  }
});
yourActivity.addEventListener('input', (e) => {                  // активность пользователя
  yourActivityValue = e.target.value;

  switch (yourActivityValue) {
    case '1':
      imageYourActive.src = "img/pas.png";
      activity = 1.2;
      break;
    case '2':
      imageYourActive.src = "img/norm.png";
      activity = 1.38;
      break;
    case '3':
      imageYourActive.src = "img/active.png";
      activity = 1.55;
      break;
  }
});
desiredResult.addEventListener('input', (e) => {                 // желаемый результат
  desiredResultValue = e.target.value;

  switch (desiredResultValue) {
    case '1':
      imageDesiredResult.src = "img/lose_weight.png";
      caloricСoefficient = 15;
      break;
    case '2':
      imageDesiredResult.src = "img/maintain_weight.png";
      caloricСoefficient = 0;
      break;
    case '3':
      imageDesiredResult.src = "img/get_fat.png";
      caloricСoefficient = 15;
      break;
  }
});

// кнопки Next
firstButtonNext.addEventListener('click', (e) => {
  if ((maleGender || femaleGender) && (userWeight !== "") && (userAge !== "")) {
    firstBlock.style.display = "none";
    secondBlock.style.display = "block";
  } else {
    alert("Вы что-то пропустили");
  }
});
secondButtonNext.addEventListener('click', (e) => {
  secondBlock.style.display = "none";
  thirdBlock.style.display = "block";
});
thirdButtonNext.addEventListener('click', (e) => {
  thirdBlock.style.display = "none";
  fourthBlock.style.display = "block";

  if (maleGender) {
    let basicMetabolism = 66 + (13.7 * userWeight) + (5 * chosenHeightValue) - (6.8 * userAge);
    let basalMetabolismWithRegardToActivity = basicMetabolism * activity;
    if (desiredResultValue == '1') calories = basalMetabolismWithRegardToActivity - caloricСoefficient;
    if (desiredResultValue == '2') calories = basalMetabolismWithRegardToActivity;
    if (desiredResultValue == '3') calories = basalMetabolismWithRegardToActivity + caloricСoefficient;

    result.innerHTML = Math.round(calories);
    
  }
  
  if (femaleGender) {
    let basicMetabolism = 655 + (9.6 * userWeight) + (1.8 * chosenHeightValue) - (4.7 * userAge);
    let basalMetabolismWithRegardToActivity = basicMetabolism * activity;
    if (desiredResultValue == '1') calories = basalMetabolismWithRegardToActivity - caloricСoefficient;
    if (desiredResultValue == '2') calories = basalMetabolismWithRegardToActivity;
    if (desiredResultValue == '3') calories = basalMetabolismWithRegardToActivity + caloricСoefficient;

    result.innerHTML = Math.round(calories);
  }
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

