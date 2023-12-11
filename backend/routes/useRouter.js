const express = require("express");
const { logIn, signUp, getUser } = require("../controller/userController");
const user = express.Router();

user.route('/',getUser)
user.post("/login", logIn);
user.post("/signUp", signUp);


module.exports = user;
