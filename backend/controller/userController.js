const User = require("../models/userModel");
const mongoose = require("mongoose");
const generateToken = require("../config/generateToken");
const errorCatcher = require("../utils/errorCatcher");

const logIn = errorCatcher(async (req, res) => {
  const { email, password } = req.body;
  const newUser = await User.findOne({ email });
  if (!newUser) {
    throw new Error("User Not Fount");
  }
  if (newUser && (await newUser.matchPassword(password))) {
    res.status(201).json({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      image: newUser.pic,
      token: generateToken(newUser._id),
    });
  } else {
    throw new Error("Incorrect password");
  }
});

const signUp = errorCatcher(async (req, res) => {
  const { email, password, name, image } = req.body;
  if (!email || !password || !name) {
    throw new Error("Please Fill The Fields");
  }
  const user = await User.findOne({ email });
  if (user) {
    throw new Error("User already exist");
  }
  const newUser = await User.create({
    name,
    email,
    password,
    image,
  });
  if (newUser) {
    res.status(201).json({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      image: newUser.pic,
      token: generateToken(newUser._id),
    });
  } else {
    throw new Error("Error while creating user");
  }
});
const getUser = errorCatcher(async (req, res) => {
  console.log('hahah');
  const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};

  const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });
  res.send(users);
});

module.exports = {
  logIn,
  signUp,
  getUser
};
