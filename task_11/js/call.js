// Добавьте в последнюю строчку метод call() так, чтобы на экран вывелось value инпута, лежащего в переменной elem.

var input = document.getElementById('elem');

function func() {
  alert(this.value);
}

func.call(input); // тут должно вывести value инпута