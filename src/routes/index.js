const express = require("express");

const router = express.Router();

const {
  getTodos,
  detailTodo,
  addTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todo");

const {
  getUsers,
  getDetailUser,
  addUser,
  updateUser,
  deleteUser,
} = require("../controllers/user");

router.get("/todos", getTodos);
router.get("/todo/:id", detailTodo);
router.post("/todo", addTodo);
router.patch("/todo/:id", updateTodo);
router.delete("/todo/:id", deleteTodo);

router.get("/users", getUsers);
router.get("/user/:id", getDetailUser);
router.post("/user", addUser);
router.patch("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

module.exports = router;
