const User = require("../models/user");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

module.exports.profilecontroller = (req, res) => {
  const token = req.cookies?.jwt;  
  if (token) {
    jwt.verify(token, JWT_SECRET, (err, userData) => {
      if (err) throw err;
      res.json(userData);
    });
  } else {
    res.status(401).json("no token");
  }
};
