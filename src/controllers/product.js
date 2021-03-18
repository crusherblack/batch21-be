const { Product, Category, CategoryProduct } = require("../../models");

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      include: {
        model: Category,
        as: "categories",
        through: {
          model: CategoryProduct,
          as: "jembatan",
        },
      },
    });

    res.send({
      status: "success",
      message: "Products Succesfully Get",
      data: {
        products,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      status: "error",
      message: "Server Error",
    });
  }
};

exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: {
        model: Product,
        as: "products",
        through: {
          model: CategoryProduct,
          as: "jembatan",
        },
      },
    });

    res.send({
      status: "success",
      message: "Products Succesfully Get",
      data: {
        categories,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      status: "error",
      message: "Server Error",
    });
  }
};
