function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <div>
          <strong>{todo.title}</strong> — <em>{todo.priority}</em>
          <br />
          <small>📅 Due: {todo.dueDate || "N/A"}</small> |{" "}
          <small>📂 Category: {todo.category || "None"}</small>
        </div>
      </div>
      <div className="todo-actions">
        <button onClick={() => onDelete(todo.id)}>🗑️</button>
      </div>
    </div>
  );
}

export default TodoItem;
