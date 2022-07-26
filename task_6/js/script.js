var a = [1, 2, 3];
var b = [4, 5, 6];

// объединяем массивы в один
console.log(a.concat(b));

// из массива [1, 2, 3] делаем массив [3, 2, 1];
console.log(a.reverse());

// сортировка массива от меньшего к большему значению
var arrNumbers = [3, 4, 1, 2, 7];
console.log(arrNumbers.sort((a, b) => a - b));

// создаём массив с чётными значениями
var cells = [3, 4, 1, 2, 7];
var result = cells.filter(item => item % 2 === 0);
console.log(result);

