const httpStatus = require("http-status");
const mongoose = require("mongoose");
const User = mongoose.model("user");

const AddUser = async (req, res) => {
  console.log("in");
  const data = req.body;
  await new User(data).save();
  res.status(httpStatus.OK).send({ data });
};

module.exports = AddUser;
