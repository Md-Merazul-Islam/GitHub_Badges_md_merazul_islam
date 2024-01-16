let todoList = [];

function addTodo(item) {
  todoList.push(item);
}

function displayTodos() {
  console.log("To-Do List:");
  for (let i = 0; i < todoList.length; i++) {
    console.log(`${i + 1}. ${todoList[i]}`);
  }
}

addTodo("Buy groceries");
addTodo("Read a book");
addTodo("Exercise");

displayTodos();
