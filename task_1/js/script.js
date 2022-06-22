// Находим объём цилиндра. Пользователь может ввести в модальное окно только число больше нуля, 
// в противном случае модальное окно с запросом данных будет вызвано снова.
// Результат округления происходит до целого числа по математическим правилам: 3,45 - сначала будет 3,5 - потом 4

const mathNumberZero = 0;

do {
  var radius = prompt("Задайте значение радиуса цилиндра:");
}
while
  ((isNaN(radius))
  || (radius === " ")
  || (radius === "")
  || (radius <= mathNumberZero));

do {
  var cylinderHeight = prompt("Задайте значение высоты цилиндра:");
}
while
  ((isNaN(cylinderHeight))
  || (cylinderHeight === " ")
  || (cylinderHeight === "")
  || (cylinderHeight <= mathNumberZero));

let fullVolumeCylinder = Math.PI * Math.pow(radius, 2) * cylinderHeight;
let result = Math.round(fullVolumeCylinder.toFixed(1));

alert("Радиус: " + radius + "\n" +
  "Высота: " + cylinderHeight + "\n" +
  "Объём цилиндра: " + result);