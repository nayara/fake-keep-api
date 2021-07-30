const mongoose = require("mongoose");

const TodoListSchema = new mongoose.Schema({
  title: { type: String, required: true },
  items: [
    {
      name: { type: String, required: true },
      checked: { type: Boolean, required: true },
    },
  ],
});

module.exports = mongoose.model("TodoList", TodoListSchema);
