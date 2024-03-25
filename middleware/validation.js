const { validationResult } = require('express-validator');
const httpStatus = require('http-status');

const validationErrorResponse = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ data: errors.array(), responseMsg: errors.array()[0].msg });
  }

  next();
};

module.exports = validationErrorResponse;
