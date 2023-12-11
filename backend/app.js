const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT;
const data = require("./data");
const cors = require("cors");
const errorHandler = require("./middlewares/errorHandler");
const notFount = require("./middlewares/errorHandler");
const user = require("./routes/useRouter");
app.use(express.json());
const connect = require("./config/database");
app.use(cors());
app.use('/user',user);
connect();

app.get("/", (req, res) => {
  console.log("yes");
  res.send("running");
});
app.get("/chat", (req, res) => {
  res.send(data);
});
app.use(notFount);
app.use(errorHandler);
app.listen(port, () => {
  console.log(`server is running http://localhost:${port}`);
});
