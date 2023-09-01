require("dotenv").config();

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const db = require("./config/mongodb");
const server = require("./routes/server");
const profile = require("./routes/profile");
const { checkUser, requireAuth } = require("./middleware/authmiddleware");

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
app.use("/profile", profile);
app.use("/register", server);

app.listen(8000, (error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("the server is ");
});
