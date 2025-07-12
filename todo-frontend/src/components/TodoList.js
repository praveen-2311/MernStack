// src/components/TodoList.js

import React, { useEffect, useState } from 'react';
import axios from '../api/axios'; // go up one level from components to access api

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get('/todos');
        console.log('Fetched todos:', response.data); // ✅ debug log
        setTodos(response.data);
      } catch (error) {
        console.error('Error fetching todos:', error.message);
      }
    };

    fetchTodos();
  }, []);

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.length > 0 ? (
          todos.map((todo) => (
            <li key={todo._id}>
              <strong>{todo.task}</strong> - {todo.priority}
            </li>
          ))
        ) : (
          <p>No todos found</p>
        )}
      </ul>
    </div>
  );
};

export default TodoList;
