const Router = require("express").Router();
const userRoute = require("./api/user");

Router.use("/users", userRoute);

module.exports = Router;
