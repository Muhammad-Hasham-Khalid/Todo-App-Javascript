// Constructor function
function Todo(content) {
  this.content = content;
  this.completed = false;
}

const TODOS = [
  {
    content: 'lorem ipsum text',
    completed: false,
  },
  {
    content: 'lorem ipsum text',
    completed: true,
  },
  {
    content: 'lorem ipsum text',
    completed: false,
  },
  {
    content: 'lorem ipsum text',
    completed: true,
  },
  {
    content: 'lorem ipsum text',
    completed: false,
  },
];

function createTodoCard(todo) {
  // Destructuring
  const { content, completed } = todo;

  // Back ticks (template string)
  const cardText = `<span>${content}</span>`;

  // ternary operator
  const cardCheck = completed
    ? '<i class="fas fa-check"></i>'
    : '<i class="far fa-circle"></i>';

  return `${cardText}${cardCheck}`;
}

// A function to refresh/update the todos on the screen
function showTodos() {
  // DOM: query selector
  const todos = document.querySelector('.todos');
  todos.innerHTML = '';

  // arrow function
  TODOS.forEach(todo => {
    const todoCardContent = createTodoCard(todo);
    const todoCard = document.createElement('div');
    todoCard.className = 'todoCard';
    todoCard.innerHTML = todoCardContent;

    todos.appendChild(todoCard);
  });
}

// event listener
window.addEventListener('DOMContentLoaded', () => {
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
