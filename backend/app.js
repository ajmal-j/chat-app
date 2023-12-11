const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT;
const data = require("./data");
const cors = require("cors");
const errorHandler = require("./middlewares/errorHandler");
const notFount = require("./middlewares/errorHandler");
const userRoutes = require("./routes/useRouter");
app.use(express.json());
const connect = require("./config/database");
const chatRoutes = require("./routes/chatRoutes");

app.use(cors());
app.use('/user',userRoutes);
app.use('/chats',chatRoutes);
connect();

app.get("/", (req, res) => {
  console.log("yes");
  res.send("running");
});

app.use(notFount);
app.use(errorHandler);
app.listen(port, () => {
  console.log(`server is running http://localhost:${port}`);
});
