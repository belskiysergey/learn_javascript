// С появлением попапа сравнивать сколько осталось до конца акции и показывать количество времени. 
// Каждую секунду обновлять время.
// При нажатии "купить" скрывать попап.
// При нажатии "отмена" скрывать попап но показывать через 10 секунд.
// Использовать setTimeout setInterval
// -----------------------------------------------------------------------------------------------


let blockPopup = document.querySelector('.modal'); // сам блок попап
let counter = document.getElementById("counter"); // таймер
let salePopupBay = document.querySelector('.sale-popup-bay');  // кнопка купить
let salePopupClose = document.querySelector('.sale-popup-close');  // кнопка закрыть

setInterval(function () {
  const deadline = new Date(2022, 6, 31, 23, 59, 00, 500); // дата окончания акции
  const toDay = new Date(); // сегодняшнее число

  let milisecondsDeadline = +deadline; // преобразование дату в миллисекунды от 1970 года
  let milisecondsToDay = +toDay; // преобразование дату в миллисекунды от 1970 года
  let timeLeft = milisecondsDeadline - milisecondsToDay;  // миллисекунд осталось до конца акции
  let seconds = Math.floor((timeLeft / 1000) % 60); // секунды 
  let minutes = Math.floor((timeLeft / (1000 * 60)) % 60); // минуты
  let hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24); // часы
  let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24)); // дни

  // форматируем отображение счётчика: 12:3:59 ---> 12:03:59
  const formatDeadline = [
    days,
    hours.toString().length > 1 ? hours : `0${hours}`,
    minutes.toString().length > 1 ? minutes : `0${minutes}`,
    seconds.toString().length > 1 ? seconds : `0${seconds}`
  ].join(':');

  counter.innerHTML = formatDeadline;

}, 1000); // обновление данных каждую секунду для вычесление оставшегося времени - ход таймера

salePopupBay.addEventListener('click', popupBay);   // навешиваем слушатель события на кнопку купить
salePopupClose.addEventListener('click', popupClose); // навешиваем слушатель события на кнопку закрыть

function popupBay() {
  localStorage.setItem('Sale', true);
  let info = JSON.parse(localStorage.getItem('Sale'));
  console.log(info);
  blockPopup.style.display = "none";
  clearInterval(timerId); // при нажатии кнопки "Купить" удаляем id setInterval для повторного показа попапа
}

function popupClose() {
  localStorage.setItem('Sale', false); // записываем значение в localStorage
  let info = JSON.parse(localStorage.getItem('Sale')); // получаем значение ключа "Sale"
  console.log(info);
  blockPopup.style.display = "none";
}

function show() {
  blockPopup.style.display = "block";
}

let timerId = setInterval(() => show(), 10000);

// если в базе браузера ключ Sale не имеет значение true, значи была нажата кнопка "Закрыть", по этому через 10 секунд попап будет показываться снова
if (localStorage.getItem('Sale') !== true) timerId;