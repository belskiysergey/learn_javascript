// Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами (через substr, substring, slice).

let str = "aaa bbb ccc";
let firstWay = str.substr(4, 3);
let secondWay = str.substring(4, 7);
let thirdWay = str.slice(4, 7);

console.log(firstWay);
console.log(secondWay);
console.log(thirdWay);

// Преобразуйте первую букву строки в верхний регистр.

function makesStringCapitalize(str) {
  let firstLetter = str.charAt(0).toLocaleUpperCase();
  return str.replace(str.charAt(0), firstLetter);
}

console.log(makesStringCapitalize("я учу javascript!"));

// Преобразуйте строку 'var_teeeeest_text' в 'varTeeeestText'. Скрипт должен работать с любыми аналогичными строками.

function makesCamelCase(str) {
  let arr = str.split("_");

  for (let i = 1; i < arr.length; i++) {
    let bigLetter = arr[i].charAt(0).toUpperCase();
    arr[i] = arr[i].split('');
    arr[i][0] = bigLetter;
    arr[i] = arr[i].join('');
  }

  let result = arr.join('');
  return result;
}

let text = "var_teeeest_text";
console.log(makesCamelCase(text));

// Вывести в консоль рандомное число от 0 до 50

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min));
}

console.log(getRandomNumber(0, 50));