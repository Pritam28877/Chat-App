require("dotenv").config();

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const db = require("./config/mongodb");
const server = require("./routes/server");

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);
// db();
app.get("/", (req, res) => {
  res.json("server ok");
});
app.use("/register", server);

app.listen(8000, (error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("the server ");
});
