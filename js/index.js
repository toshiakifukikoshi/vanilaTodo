const todoText = document.querySelector("#todoText");
const addTodoText = document.querySelector(".input_area .btn");
const incompleteTodo = document.querySelector(".incompleteTodos");
const incompleteTodos = [];
const completeTodos = [];


const addCompleteTodo = (e) => {
  
};

const addTodo = () => {
  const todo = todoText.value;
  incompleteTodo.push(todo);
  const li = document.createElement("li");
  const completeButton = document.createElement("button");
  completeButton.textContent = "完了";
  completeButton.classList.add = "btn";

  completeButton.addEventListener("click", addCompleteTodo);
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "削除";
  deleteButton.classList.add = "btn";
  li.textContent = todo;
  incompleteTodo.appendChild(li);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);
  todoText.value = "";
};

addTodoText.addEventListener("click", addTodo);
