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
  getProfiles,
  getSkills,
  getDetailUser,
  addUser,
  updateUser,
  deleteUser,
} = require("../controllers/user");

const { getProducts, getCategories } = require("../controllers/product");

router.get("/todos", getTodos);
router.get("/todo/:id", detailTodo);
router.post("/todo", addTodo);
router.patch("/todo/:id", updateTodo);
router.delete("/todo/:id", deleteTodo);

router.get("/users", getUsers);
router.get("/profiles", getProfiles);
router.get("/skills", getSkills);
router.get("/user/:id", getDetailUser);
router.post("/user", addUser);
router.patch("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

router.get("/products", getProducts);
router.get("/categories", getCategories);

module.exports = router;
