export function createTodoCard(todo) {
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
