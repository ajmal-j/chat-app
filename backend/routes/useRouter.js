const express = require("express");
const user = express.Router();
const userController = require("../controller/userController");


user.post("/login", userController.logIn);
user.post("/signUp", userController.signUp);


module.exports = user;
