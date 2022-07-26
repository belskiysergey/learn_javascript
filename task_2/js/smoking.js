// По возрасту есть ограничения: от 6 лет включительно
// врядли человек может начать курить раньше

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
