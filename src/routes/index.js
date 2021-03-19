const express = require("express");

const router = express.Router();
const { authenticated } = require("../middlewares/auth"); //import middlware auth
const { checkRolePartner } = require("../middlewares/checkRole");

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

const { registerUser, login } = require("../controllers/auth");

router.get("/todos", getTodos);
router.get("/todo/:id", detailTodo);
router.post("/todo", addTodo);
router.patch("/todo/:id", updateTodo);
router.delete("/todo/:id", deleteTodo);

router.get("/users", checkRolePartner, getUsers);
router.get("/profiles", getProfiles);
router.get("/skills", getSkills);
router.get("/user/:id", getDetailUser);
router.post("/user", addUser);
router.patch("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

router.get("/products", getProducts);
router.get("/categories", getCategories);

router.post("/register", registerUser);
router.post("/login", login);

module.exports = router;
