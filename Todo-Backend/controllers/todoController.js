// controllers/todoController.js
const Todo = require("../models/Todo");

// GET all todos
const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch todos" });
  }
};

// GET todo by ID
const getTodoById = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (todo) {
      res.json(todo);
    } else {
      res.status(404).json({ message: "Todo not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching todo" });
  }
};

// CREATE new todo
const createTodo = async (req, res) => {
  try {
    const { title, priority } = req.body;
    const newTodo = new Todo({ title, priority });
    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (error) {
    res.status(400).json({ message: "Error creating todo" });
  }
};

// UPDATE existing todo
const updateTodo = async (req, res) => {
  try {
    const { title, priority } = req.body;
    const todo = await Todo.findById(req.params.id);
    if (todo) {
      todo.title = title || todo.title;
      todo.priority = priority || todo.priority;
      const updated = await todo.save();
      res.json(updated);
    } else {
      res.status(404).json({ message: "Todo not found" });
    }
  } catch (error) {
    res.status(400).json({ message: "Error updating todo" });
  }
};

// DELETE todo
const deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (todo) {
      await todo.deleteOne();
      res.json({ message: "Todo deleted" });
    } else {
      res.status(404).json({ message: "Todo not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting todo" });
  }
};

module.exports = {
  getTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo
};
