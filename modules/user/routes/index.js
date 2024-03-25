const express = require("express");
const { AddUser } = require("../controller");
const { validate } = require("../validation");
const validationErrorResponse = require("../../../middleware/validation");

const userRouter = express.Router();

userRouter.post("/add", validate("add"), validationErrorResponse, AddUser);

module.exports = { userRouter };
