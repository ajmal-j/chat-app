const User = require("../models/userModel");
const mongoose = require("mongoose");
const generateToken = require("../config/generateToken");

const logIn =async (req, res) => {
 try {
  const { email, password } = req.body;
  const user= await User.findOne({email})
  if(user && (await user.matchPassword(password)) ){
    res.status(201).json({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      image: newUser.image,
      token: generateToken(newUser._id),
    });
  }else{
    throw new Error("Error while logIn");    
  }
 } catch (error) {
  
 }
};
const signUp = async (req, res) => {
  try {
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
        image: newUser.image,
        token: generateToken(newUser._id),
      });
    } else {
      throw new Error("Error while creating user");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  logIn,
  signUp,
};
