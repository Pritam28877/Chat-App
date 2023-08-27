require("dotenv").config();

const express = require("express");
const app = express();
const db = require("./config/mongodb");
const server = require("./routes/server");
db();
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
