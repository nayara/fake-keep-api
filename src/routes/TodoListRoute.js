const TodoListController = require("../controllers/TodoListController");

module.exports = (app) => {
  app.get("/lists", TodoListController.get);
  app.post("/lists", TodoListController.post);
  app.delete("/lists", TodoListController.delete);
};
