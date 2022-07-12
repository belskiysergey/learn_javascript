document.body.addEventListener('keydown', moveBlock)
var block = document.querySelector('#blueRect');

const clientWidth = document.documentElement.clientWidth;
const clientHeight = document.documentElement.clientHeight;

var indent = 100;

function moveBlock(event) {
  
  switch (event.key) {
    case 'ArrowRight':
      if (parseInt(block.style.left) < (clientWidth - block.offsetWidth))
        block.style.left = parseInt(block.style.left) + indent + "px"; // двигаем элемент вправо
      break;

    case 'ArrowLeft':
      if ((parseInt(block.style.left)) > (clientWidth - clientWidth))
        block.style.left = parseInt(block.style.left) - indent + "px"; // двигаем элемент влево
      break;

    case 'ArrowUp':
      if ((parseInt(block.style.top) > (clientHeight - clientHeight)) && (parseInt(block.style.top) > indent)) {
        block.style.top = parseInt(block.style.top) - indent + "px"; // двигаем элемент вверх
      } else if ((parseInt(block.style.top) > (clientHeight - clientHeight)) && (parseInt(block.style.top) < indent)) {
        block.style.top = clientHeight - clientHeight + "px"; // двигаем элемент вверх
      } else {
        block.style.top = parseInt(block.style.top) - parseInt(block.style.top) + "px";
      }
      break;

    case 'ArrowDown':
      if (((parseInt(block.style.top)) < (clientHeight - block.offsetHeight)) && (indent <= ((clientHeight - block.offsetHeight) - (parseInt(block.style.top))))) {
        block.style.top = parseInt(block.style.top) + indent + "px"; // двигаем элемент вниз
      } else if (((clientHeight - block.offsetHeight) - ((parseInt(block.style.top)))) < block.offsetHeight) {
        block.style.top = clientHeight - block.offsetHeight + "px"; // двигаем элемент вниз
      }
      break;
  }
}
