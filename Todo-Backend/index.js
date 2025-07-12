const express = require('express');
const app = express();
const todoRoutes = require('./routes/todoRoutes'); // ✅ importing correctly

const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// ✅ Root route
app.get('/', (req, res) => {
  res.send('Welcome to the To-Do App!');
});

// ✅ Use the /api/todos route
app.use('/api/todos', todoRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
