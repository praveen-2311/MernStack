const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  task: String,
  priority: String,
  medium: String,   // ✅ added
  time: String,     // ✅ added
  category: String  // ✅ added
});

module.exports = mongoose.model('Todo', todoSchema);
