require("dotenv").config();

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const db = require("./config/mongodb");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const ws = require("ws");
const register = require("./routes/register");
const profile = require("./routes/profile");
const login = require("./routes/login");
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
app.use("/register", register);
app.use("/login", login);

const server = app.listen(8000, (error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("the server is ");
});

const wss = new ws.WebSocketServer({ server });

wss.on("connection", (connection, req) => {
  const cookie = req.headers.cookie;
  if (cookie) {
    const tookenCookie = cookie
      .split(";")
      .find((str) => str.startsWith("jwt="));
    if (tookenCookie) {
      const token = tookenCookie.split("=")[1];
      if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
          if (err) {
            console.log(err.message);
            if (err) throw err;
          }
          const { id, user } = decodedToken;
          connection.id = id;
          connection.user = user;
        });
      }
    }
  }
  // console.log(cookie);
});
