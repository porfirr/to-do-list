const toDoList = JSON.parse(localStorage.getItem('toDoList')) || [{
  name: 'make dinner',
  dueDate: '2024-02-11'
}, {
  name: 'wash dishes',
  dueDate: '2024-02-11'
}];

renderToDoList();

function renderToDoList() {
  let toDoListHTML = '';
  // toDoList.forEach(function(todoObject, index)
  toDoList.forEach((todoObject, index) => {
    // const todoObject = toDoList[i];
    // parametre bu işe yarıyor zaten

    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;
    const {name, dueDate} = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-todo-button js-delete-todo-button">
        Delete
      </button> 
      `;
    toDoListHTML += html;
  });

  document.querySelector('.js-todo-list')
    .innerHTML = toDoListHTML;

  document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        toDoList.splice(index, 1);
        renderToDoList();
        saveToStorage();
      });
    });
}

document.querySelector('.js-add-todo-button')
  .addEventListener('click', () => {
    addToDo();
  });

function addToDo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  toDoList.push({
    name,                  // name: name,
    dueDate                // dueDate: dueDate
  });

  inputElement.value = '';
  renderToDoList();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem('toDoList', JSON.stringify(toDoList));
}