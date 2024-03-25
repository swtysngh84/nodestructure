const User = require("../services");

const AddUser = (req, res, next) => {
  try {
    return User.AddUser(req, res);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  AddUser,
};
