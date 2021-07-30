const TodoList = require("../models/TodoListModel");

exports.get = (req, res) => {
  TodoList.find({})
    .then((response) => res.send(response))
    .catch((error) => res.json({ status: 400, message: error.message }));
};

exports.post = (req, res) => {
  TodoList.create(req.body)
    .then((data) =>
      res.json({ status: 200, message: `Created '${data.title}' list` })
    )
    .catch((error) => res.json({ status: 400, message: error.message }));
};

exports.delete = (req, res) => {
  TodoList.findByIdAndDelete(req.body.id, (err) => {
    if (err) res.json({ status: 400, message: "error" });
    res.json({ status: 200, message: `Deleted '${req.body.id}' with success` })
  });
};
