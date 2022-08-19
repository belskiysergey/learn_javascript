// 1. На странице есть абзацы. Необходимо по нажатии кнопки их укоротить до 20 символов и вконце поставить троеточие. 
// 2. Сделать чтобы первый абзац менял свой цвет каждую секунду. Когда дойдёт до последнего цвета в массиве, то всё нацинается сначала. Количество цветом может быть разным. 

let firstBlock = document.getElementById('first');
let secondBlock = document.getElementById('second');
let thirdBlock = document.getElementById('third');
let button = document.getElementById('button');

let firstBlockText = firstBlock.textContent;
let secondBlockText = secondBlock.textContent;
let thirdBlockText = thirdBlock.textContent;

button.addEventListener('click', (e) => {
  let firstCroppedText = firstBlockText.slice(0, 21) + "...";
  let secondCroppedText = secondBlockText.slice(0, 21) + "...";
  let thirdCroppedText = thirdBlockText.slice(0, 21) + "...";

  firstBlock.innerText = firstCroppedText;
  secondBlock.innerText = secondCroppedText;
  thirdBlock.innerText = thirdCroppedText;
});

let colorArr = ["red", "green", "yellow", "orange"];
let currentColor = 0;

setInterval(function() {
  if (colorArr[++currentColor]) {
    firstBlock.style.color = colorArr[currentColor];
  } else {
    currentColor = 0;
    firstBlock.style.color = colorArr[currentColor];
  }
}, 1000);

