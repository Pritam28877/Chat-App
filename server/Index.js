const express = require("express");
const app = express();
const server = require("./routes/server");

app.get("/", (req, res) => {
  res.json("server ok");
});
app.use("/register", server);

app.listen(8000, (e) => {
  if (e) {
    console.log(e);
    return;
  }
  console.log("8000");
});
