import React, { useState } from 'react';
import axios from '../api/axios';

const AddTodo = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [dueDate, setDueDate] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newTodo = {
      title,
      priority,
      dueDate,
      category,
    };

    try {
      const res = await axios.post('/', newTodo);
      onAdd(res.data);  // update todo list in parent
      setTitle('');
      setPriority('Medium');
      setDueDate('');
      setCategory('');
    } catch (err) {
      console.error('Error adding todo:', err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <h3>Add New Task</h3>

      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <button type="submit">➕ Add Task</button>
    </form>
  );
};

export default AddTodo;
