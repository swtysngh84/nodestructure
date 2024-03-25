const router = require("express").Router;
const { userRouter } = require("../modules/user/routes");

const adminRoute = router();

adminRoute.use('/user',userRouter);

module.exports = {
    adminRoute,
};
