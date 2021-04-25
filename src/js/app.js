import { createTodoCard } from './helpers';
import { Todo } from './models';

let TODOS = [];

// A function to refresh/update the todos on the screen
function showTodos() {
  // DOM: query selector
  const todos = document.querySelector('.todos');
  todos.innerHTML = '';

  // arrow function
  TODOS.forEach((todo, idx) => {
    const todoCardContent = createTodoCard(todo);
    const todoCard = document.createElement('div');
    todoCard.className = 'todoCard';
    todoCard.innerHTML = todoCardContent;

    todoCard.addEventListener('click', () => {
      TODOS[idx].completed = !TODOS[idx].completed;
      showTodos();
    });

    todos.appendChild(todoCard);
  });

  localStorage.setItem('todos', JSON.stringify(TODOS));
}

// event listener
window.addEventListener('DOMContentLoaded', () => {
  const data = localStorage.getItem('todos');
  if (data) {
    TODOS = JSON.parse(data);
  }
  showTodos();
});

const addTodoInput = document.getElementById('addTodoInput');
const addTodoButton = document.getElementById('addTodoButton');

addTodoButton.addEventListener('click', () => {
  const todoContent = addTodoInput.value;
  const newTodo = new Todo(todoContent);
  TODOS.push(newTodo);
  addTodoInput.value = '';
  showTodos();
});
