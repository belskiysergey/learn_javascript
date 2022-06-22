const startValue = 0;
const oneKilimeterInMeters = 1000;
const oneFeetInMeters = 0.305;

// Получаем значение в километрах

do {
  var argKilometers = +prompt("Введите значение в километрах:");
}
while
  (isNaN(argKilometers)
  || (Boolean(argKilometers) === false)
  || (argKilometers < startValue));git

// Получаем значение в футах

do {
  var argFeet = +prompt("Введите значение в футах:");
}
while
  (isNaN(argFeet)
  || (Boolean(argFeet) === false)
  || (argFeet < startValue));

let kilometersInMeters = argKilometers * oneKilimeterInMeters;
let feetInMeters = argFeet * oneFeetInMeters;

if (argKilometers < feetInMeters) {
  alert(feetInMeters + " футов " + "больше." + "\n" + kilometersInMeters + " километров " + "меньше.");
} else if (kilometersInMeters > feetInMeters) {
  alert(kilometersInMeters + " километров " + "больше." + "\n" + feetInMeters + " футов " + "меньше.");
} else {
  alert("Значения равны!" + "\n" + kilometersInMeters + " = " + feetInMeters);
}

