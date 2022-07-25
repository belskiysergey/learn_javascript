// Фильтр по подстроке строке
// Пробежатся по масиву строк и найти подстроку - сделать массив строк содержащих нужную подстроку и вывести на экран.

// Фильтр по алфавиту 
// взять строку и сравнить её с массивом строк чере цикл - двигать строку по массиву и если строка имеет меньшее значение
// то поднимать её на пункт выше, а если меньше - ниже

// Фильтр по выполненым
// пробежаться по массиву и отфильтровать те элементы массива, у которых значения completed = true

var data = [
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": true
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": true
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  },
  {
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
  },
  {
    "userId": 1,
    "id": 7,
    "title": "illo expedita consequatur quia in",
    "completed": false
  },
  {
    "userId": 1,
    "id": 8,
    "title": "quo adipisci enim quam ut ab",
    "completed": true
  },
  {
    "userId": 1,
    "id": 9,
    "title": "molestiae perspiciatis ipsa",
    "completed": false
  },
  {
    "userId": 1,
    "id": 10,
    "title": "illo est ratione doloremque quia maiores aut",
    "completed": true
  },
  {
    "userId": 1,
    "id": 11,
    "title": "vero rerum temporibus dolor",
    "completed": true
  },
  {
    "userId": 1,
    "id": 12,
    "title": "ipsa repellendus fugit nisi",
    "completed": true
  },
  {
    "userId": 1,
    "id": 13,
    "title": "et doloremque nulla",
    "completed": false
  },
  {
    "userId": 1,
    "id": 14,
    "title": "repellendus sunt dolores architecto voluptatum",
    "completed": true
  },
  {
    "userId": 1,
    "id": 15,
    "title": "ab voluptatum amet voluptas",
    "completed": true
  },
  {
    "userId": 1,
    "id": 16,
    "title": "accusamus eos facilis sint et aut voluptatem",
    "completed": true
  },
  {
    "userId": 1,
    "id": 17,
    "title": "quo laboriosam deleniti aut qui",
    "completed": true
  },
  {
    "userId": 1,
    "id": 18,
    "title": "dolorum est consequatur ea mollitia in culpa",
    "completed": false
  },
  {
    "userId": 1,
    "id": 19,
    "title": "molestiae ipsa aut voluptatibus pariatur dolor nihil",
    "completed": true
  },
  {
    "userId": 1,
    "id": 20,
    "title": "ullam nobis libero sapiente ad optio sint",
    "completed": true
  }
];

// выводит весь неотфильтрованный список задач
function renderList(list) {
  todoList.innerHTML = '';
  list.forEach((item, index) => {
    let todoItem = `
    <div class='todo-item todo-item-${item.id}'>
      <div class="completed completed-${item.completed}">
        <h3 class="todo-item-title" data-userId='${item.userId}'>${index + 1} ${item.title}</h3>
      </div>
    </div>`;

    todoList.innerHTML += todoItem;
  });
}

const todoList = document.querySelector('.todo-list');
const searchInput = document.querySelector('.searchInput');
const select = document.querySelector('.select');
const isCompleted = document.querySelector('.isComplited');

// начальное состояние фильтров
// let searchValue = '';
// let selectValue = 'asc';
// let completedValue = false;

// проверяем параметры URL и добавляем их в переменные фильтров, если параметров нет, то действует значение по умолчанию
let urlParams = new URLSearchParams(location.search);
let searchValue = urlParams.get('searchInput') || "";
let selectValue = urlParams.get('select') || "asc";
let completedValue = urlParams.get('isCompleted') || false;

searchInput.addEventListener('change', (event) => {   
  searchValue = event.target.value; 
  localStorage.setItem("searchInput", searchValue); 
  addsFilterStateToUrl();
  renderList(filterList());     
});

select.addEventListener('change', (event) => {
  selectValue = event.target.value; 
  localStorage.setItem("select", selectValue);    
  addsFilterStateToUrl();                     
  renderList(filterList());
});

isCompleted.addEventListener('change', (event) => {
  completedValue = event.target.checked;  
  localStorage.setItem("isCompleted", completedValue);
  addsFilterStateToUrl();                    
  renderList(filterList()); 
});

// добавления get-параметров к URL
function addsFilterStateToUrl() {
  let arr = [];
  if (searchValue) {
    arr.push(`search=${searchValue}`);
  } 
  if (selectValue) {
    arr.push(`sort=${selectValue}`);
  } 
  if (completedValue) {
    arr.push(`isCompleted=${completedValue}`);
  } 
  let str = arr.join();
  let arrLetters = str.split('');
  const startOfGetParameters = "?";
  const goal = ",";
  const seperator = "&";
  for (let i = 0; i < arrLetters.length; i++) {
    if (arrLetters[i] === goal) arrLetters[i] = seperator;
  }
  let newStr = arrLetters.join('');
  let result = startOfGetParameters + newStr;
  history.pushState({}, '', result);
}

// общий фильтр
function filterList() {
  let result = data;

  if (searchValue) {
    result = result.filter((item) => {
      return item.title.includes(searchValue);
    })
  }
  if (selectValue === 'asc') {
    result.sort((a, b) => {
      return a.title.localeCompare(b.title);
    })
  } else {
    result.sort((a, b) => {
      return b.title.localeCompare(a.title);
    })
  }

  if (completedValue) (
    result = result.filter((item) => {
      return item.completed;
    })
  )
  return result;
}

renderList(data);
