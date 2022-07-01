// Напишите в указанном месте конструкцию с методом bind() так, 
// чтобы this внутри функции func всегда указывал на инпут из переменной elem.

var elem = document.getElementById('elem');

function func(surname, name) {
  alert(this.value + ', ' + surname + ' ' + name);
}

var sayHi = func.bind(elem);

sayHi('Иванов', 'Иван'); //тут должно вывести 'Привет, Иванов Иван'
sayHi('Петров', 'Петр'); //тут должно вывести 'Привет, Петров Петр'