const express=require('express');
const { protect } = require('../middlewares/authMiddleWare');
const { accessChat, fetchChat } = require('../controller/chatController');
const chatRoutes=express.Router()

chatRoutes.route('/').post(protect ,accessChat);
chatRoutes.route('/chat').post(protect ,fetchChat);

module.exports=chatRoutes;