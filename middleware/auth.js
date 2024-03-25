const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const User = mongoose.model('user');
// const UserToken = mongoose.model('userToken');

// const ResponseMsg = require('../label/Response');

module.exports = async (req, res, next) => {
  try {
    const token = req.cookies.access_token;
    if (!token) {
      return res.status(400).json({
        data: null,
        // responseMsg: ResponseMsg.TokenNotPassed,
        is_logout: 1,
      });
    }
    const verifyUser = jwt.verify(token, process.env.INVESTOR_SECRET_KEY);
    if (!verifyUser) {
      return res.status(400).json({
        data: null,
        // responseMsg: ResponseMsg.UnAuthorized,
        is_logout: 1,
      });
    }
    const user = await Investor.findOne({
      _id: verifyUser._id,
      deletedAt: null,
    });
    // const findUser = await UserToken.findOne({
    //   investorId: user._id,
    //   token,
    //   deletedAt: null,
    // });
    // if (!findUser) {
    //   return res.status(401).json({
    //     data: null,
    //     responseMsg: ResponseMsg.UnAuthorized,
    //     is_logout: 1,
    //   });
    // }
    if (user) {
      user.set('password', undefined, { strict: false });
      req.user = user;
      return next();
    }

    return res.status(401).json({
      data: null,
    //   responseMsg: ResponseMsg.UnAuthorized,
      is_logout: 1,
    });
  } catch (err) {
    return res
      .status(400)
      .json({ data: null, respones_msg: err.message, is_logout: 1 });
  }
};
