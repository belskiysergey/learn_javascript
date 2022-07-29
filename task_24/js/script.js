// 1. Создаём новый XMLHttpRequest-объект
let xhr = new XMLHttpRequest();

// 2. Настраиваем его: GET-запрос по URL /article/.../load
xhr.open('GET', 'https://api.github.com/users', false);

// 3. Отсылаем запрос
xhr.send();

// 4. Этот код сработает после того, как мы получим ответ сервера
xhr.onload = function() {
  if (xhr.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
    console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`);
  } else { // если всё прошло гладко, выводим результат
    console.log(`${xhr.response}`); // response -- это ответ сервера
  }
}

xhr.onerror = function() {
  alert("Запрос не удался");
};

let result; 

// ловим ошибки
try {
  result = JSON.parse(xhr.response); // из строки делаем массив объектов
} catch {
  result = null;
}

for (let i = 0; i < result.length; i++) {
  if (i < 10) {
    document.write(`id: ${result[i].id} <br> Password: ${result[i].login} <br> Avatar: ${result[i].avatar_url} <hr>`);
  } else {
    break;
  }
}
