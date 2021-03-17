const express = require("express");

const app = express();

const port = 5000;

app.use(express.json());

let todos = [
  {
    id: 1,
    title: "Belajar Express",
    isDone: false,
  },
  {
    id: 2,
    title: "Belajar Node.js",
    isDone: true,
  },
];

app.get("/", (request, response) => {
  response.send("Hello Dumbways Nodemon");
});

app.get("/todos", (req, res) => {
  res.send({
    status: "success",
    message: "Todo Succesfully Get",
    data: {
      todos,
    },
  });
});

app.get("/todo/:id", (req, res) => {
  const { id } = req.params;

  const todo = todos.find((todo) => todo.id == id);

  if (!todo) {
    return res.status(401).send({
      status: "failed",
      message: `Todo with id: ${id} not existed`,
      data: {
        todo,
      },
    });
  }

  res.send({
    status: "success",
    message: "Todo Succesfully Get",
    data: {
      todo,
    },
  });
});

app.post("/todo", (req, res) => {
  const { body } = req;

  todos = [...todos, body];

  res.send({
    status: "success",
    message: "Todo Succesfully Added",
    data: {
      todo: body,
    },
  });
});

app.patch("/todo/:id", (req, res) => {
  const { id } = req.params;
  const { body } = req;

  const todo = todos.find((todo) => todo.id == id);

  if (!todo) {
    return res.status(401).send({
      status: "failed",
      message: `Todo with id: ${id} not existed`,
      data: {
        todo,
      },
    });
  }

  const updatedTodos = todos.map((todo) => {
    return todo.id == id ? body : todo;
  });

  todos = updatedTodos;

  res.send({
    status: "success",
    message: "Todo Succesfully Updated",
    data: {
      todo: body,
    },
  });
});

app.delete("/todo/:id", (req, res) => {
  const { id } = req.params;

  const newTodos = todos.filter((todo) => todo.id == id);

  todos = newTodos;

  res.send({
    status: "success",
    message: "Todo Succesfully Deleted",
  });
});

app.listen(port, () => console.log(`Your server is running on ${port}`));
