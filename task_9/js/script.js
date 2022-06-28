//  Выведите на экран зарплату Пети и Коли.
var obj = { 'Коля': '1000', 'Вася': '500', 'Петя': '200' };
document.write("Зарплата Коли: " + obj['Коля'] + "<br>" + "Зарплата Пети: " + obj['Петя'] + "<br>");


// Дан многомерный массив arr. Выведите с его помощью слово 'голубой'.
var arr = {
  'ru': ['голубой', 'красный', 'зеленый'],
  'en': ['blue', 'red', 'green'],
};

document.write(arr["ru"][0]);


// Дан обьект. При помощи get set, сделать так что бы при передачи добавлялся цвет, а при set выводились все цвета
var colors = {
  'ru': ['голубой', 'красный', 'зеленый'],

  get color() {
    return `${this.ru}`;
  },

  set color(value) {
    this.ru.color = this.ru.push(value);
  }
};

colors.color = "серый";
colors.color = "белый";
colors.color = "жёлтый";
console.log(colors.color);
