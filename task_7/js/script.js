// task_1

// let arrNumbers = [5, 2, -9, 7, -2, 14, -1, 0, 8];
// let arrPositiveNumbers = arrNumbers.filter(item => item > 0); // оставляем только положительные числа
// let result = arrPositiveNumbers.map(item => Math.sqrt(item)); // у каждого элемента извлекаем корень квадратный
// console.log(result);

let arrNumbers = [5, 2, -9, 7, -2, 14, -1, 0, 8];
let result = arrNumbers.filter(item => item > 0).map(item => Math.sqrt(item)); // минимизировал запись
console.log(result);

// task_2

let a = [2, 1, -3, 5, 3, 0, 7, 4, 9, -2];

// classic way
let sum = 0;
for (let i = 0; i < a.length; i++) {
  sum += a[i];
  if (sum > 10) {
    console.log(i + 1);
    break;
  }
}

// via method reduce()
a.reduce((prev, item, index) => {
  if (prev > 10) {
    return console.log(index);
  } else {
    return prev += item;
  }
}, 0);




