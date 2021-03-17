const { User } = require("../../models/");

exports.getUsers = async (req, res) => {
  //   User.findAll()
  //     .then((response) =>
  //       res.send({
  //         status: "success",
  //         message: "User Succesfully Get",
  //         data: {
  //           users: response,
  //         },
  //       })
  //     )
  //     .catch((error) => console.log(error));

  try {
    const users = await User.findAll();

    res.send({
      status: "success",
      message: "Users Succesfully Get",
      data: {
        users,
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

exports.getDetailUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findOne({
      where: {
        id,
      },
    });

    res.send({
      status: "success",
      message: "User Succesfully Get",
      data: {
        user,
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

exports.addUser = async (req, res) => {
  try {
    const { body } = req;

    const user = await User.create(body);

    res.send({
      status: "success",
      message: "User Succesfully Added",
      data: {
        user,
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

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;

    const checkId = await User.findOne({
      where: {
        id,
      },
    });

    if (!checkId)
      return res.send({
        status: "success",
        message: `User with id: ${id} not found`,
        data: {
          user,
        },
      });

    const updatedUserId = await User.update(body, {
      where: {
        id,
      },
    });

    const user = await User.findOne({
      where: {
        id: updatedUserId,
      },
    });

    res.send({
      status: "success",
      message: "User Succesfully Updated",
      data: {
        user,
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

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    await User.destroy({
      where: {
        id,
      },
    });

    res.send({
      status: "success",
      message: "User Succesfully Delete",
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      status: "error",
      message: "Server Error",
    });
  }
};

exports.functionName = async (req, res) => {
  try {
    res.send({
      status: "success",
      message: "User Succesfully Get",
      data: {
        data,
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
