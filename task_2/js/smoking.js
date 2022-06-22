// // По возрасту есть ограничения: от 6 лет включительно
// // врядли человек может начать курить раньше

// const minimumAge= 6;
// const eighteenYears= 18;

// do {
//   var visitorAge = +prompt("Сколько вам лет?");
// }
// while
//   ((isNaN(visitorAge))
//   || (Boolean(visitorAge) === false)
//   || (visitorAge < minimumAge));

// let smoking = confirm("Вы курите?");

// if ((visitorAge < eighteenYears) && (!smoking)) {
//   alert("Так держать!");
// } else if ((visitorAge < eighteenYears) && (smoking)) {
//   alert("Маме расскажу");
// } else if ((visitorAge >= eighteenYears) && (!smoking)) {
//   alert("Молодец, и не надо");
// } else {
//   alert("Ну и зря");
// }



const eighteenYears = 18;
const isAdult = +prompt("Сколько вам лет?") <= eighteenYears;
const isSmoking = confirm("Вы курите?");

switch (true) {
  case !isAdult && !isSmoking: alert("Так держать!");
    break;

  case !isAdult && isSmoking: alert("Маме расскажу");
    break;

  case isAdult && !isSmoking: alert("Молодец, и не надо");
    break;

  case isAdult && isSmoking: alert("Ну и зря");
    break;
}
