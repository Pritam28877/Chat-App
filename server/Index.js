const express = require("express");
const app = express();

app.listen(8000, (e) => {
  if (e) {
    console.log(e);
    return;
  }
  console.log("8000");
});
