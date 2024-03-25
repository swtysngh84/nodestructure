const { body, param, check, query } = require("express-validator");
const httpStatus = require("http-status");

const validate = (method) => {
  switch (method) {
    case "add": {
      return [
        body("firstName").notEmpty().withMessage({
          message: " ResponseMsg.FirstNameRequired",
          errorCode: httpStatus.UNPROCESSABLE_ENTITY,
        }),
        body("lastName").notEmpty().withMessage({
          message: "ResponseMsg.LastNameRequired",
          errorCode: httpStatus.UNPROCESSABLE_ENTITY,
        }),

        body("email")
          .notEmpty()
          .withMessage({
            message: "ResponseMsg.EmailRequired",
            errorCode: httpStatus.UNPROCESSABLE_ENTITY,
          })
          .isEmail()
          .withMessage({
            message: "ResponseMsg.EmailInValid",
            errorCode: httpStatus.UNPROCESSABLE_ENTITY,
          })
      ];
    }
  }
};

module.exports = {
  validate,
};
