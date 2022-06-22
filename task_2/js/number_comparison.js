// Получаем первое значение

do {
  var argFirst = +prompt("Введите первое число для сравнения:");
}
while
  (isNaN(argFirst) || ((Boolean(argFirst) === false) && (argFirst !== 0)));

// Получаем второе значение

do {
  var argSecond = +prompt("Введите второе число для сравнения:");
}
while
  (isNaN(argSecond) || ((Boolean(argSecond) === false) && (argFirst !== 0)));

// Сравниваем и выводим результат в модальном окне

if (argFirst < argSecond) {
  alert("Значение " + argSecond + " больше." + "\n" + "Значение " + argFirst + " меньше.");
} else if (argFirst > argSecond) {
  alert("Значение " + argFirst + " больше." + "\n" + "Значение " + argSecond + " меньше.");
} else {
  alert("Значения равны!" + "\n" + argFirst + " = " + argSecond);
}