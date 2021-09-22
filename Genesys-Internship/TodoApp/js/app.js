// Selectors

const todolistInput = document.querySelector(".todolist-input");
const btnTodo = document.querySelector(".btn-todo");
const todoList = document.querySelector("ul.todo-list");

// Eventlisteners

btnTodo.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteDone);

// Functions

function addTodo(event) {
  // prevent default from submitting forms
  event.preventDefault();
  // create a div element
  const todoDiv = document.createElement("div");
  // add classname to the div element
  todoDiv.classList.add("todo");
  // create a li element
  const li = document.createElement("li");
  // add a text into the list element
  li.innerText = todolistInput.value;
  // add class name to the list element
  li.classList.add("todo-item");
  // append the list element into the parent todoDiv elements
  todoDiv.appendChild(li);

  // create a done button element
  const doneBtn = document.createElement("button");
  // add an innerHTML to the done button element
  //   doneBtn.innerText = "Done";
  doneBtn.innerHTML = '<i class="fas fa-check"></i>';
  // add class to the done button element
  doneBtn.classList.add("done-btn");
  // append the doneBtn to the div element
  todoDiv.appendChild(doneBtn);

  // create a delete button element
  const deleteBtn = document.createElement("button");
  // add an innerHTML to the done button element
  //   deleteBtn.innerText = "Delete";
  deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
  // add class to the done button element
  deleteBtn.classList.add("delete-btn");
  // append the doneBtn to the div element
  todoDiv.appendChild(deleteBtn);
  //   append the whole child element to the parent div todolist
  todoList.appendChild(todoDiv);
  //   clear input field value after submitting
  todolistInput.value = "";
}

function deleteDone(event) {
  const item = event.target;
  console.log(item.classList[0]);
  // Delete a todo
  if (item.classList[0] == "delete-btn") {
    const todo = item.parentElement;
    todo.remove();
  }

  // Check the the Done
  if (item.classList[0] == "done-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
