// "Создание нового окна в браузере".
// Создать окно, назвать Frontend, размеры окна 500*500.
// Вставить в окно картинку (котиков).
// Окно должно двигаться каждую секунду в рандомное место.
// Не должно содержать ни скролбара ни тулбара. Ничего из параметров.
// Через 15 секунд окно должно закрыться.

const params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=500,height=500,left=0,top=0`;
const popap = window.open("", "frontend", params);
const cat = "https://chudo-prirody.com/uploads/posts/2021-08/thumbs/1628873998_60-p-foto-kotov-v-bandane-73.jpg";

popap.document.body.innerHTML = `<img src="${cat}">`;

let timeId = setInterval(() => {

  const clientWidth = document.documentElement.clientWidth;
  const clientHeight = document.documentElement.clientHeight;
  
  function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min));
  }
  
  let x = getRandomNumber(0, clientWidth);
  let y = getRandomNumber(0, clientHeight);
  
  popap.moveTo(x,y);

}, 1000);

setTimeout(() => {
  popap.close();
  clearInterval(timeId);
}, 15000);

