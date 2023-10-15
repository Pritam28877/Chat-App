const jwt = require("jsonwebtoken");
const User = require("../models/user");
const JWT_SECRET = process.env.JWT_SECRET;
console.log(JWT_SECRET);

const requireAuth = (req, res, next) => {
  const token = req.cookies?.jwt;

  // check json web token exists & is verified
  if (token) {
    jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
      if (err) {
        // console.log(err.message);
        if (err) throw err;
      } else {
        // console.log(decodedToken);
        res.json(decodedToken);
        next();
      }
    });
  } else {
    res.status(401).json("no token");
  }
};

const checkUser = async (req, res, next) => {
  const token = req.cookies.jwt;
  console.log(token);
  if (token) {
    jwt.verify(token, JWT_SECRET, async (err, decodedToken) => {
      if (err) {
        if (err) throw err;
      } else {
        let user = await User.findById(decodedToken.id);
        next();
      }
    });
  } else {
    next();
  }
};

module.exports = { requireAuth, checkUser };
