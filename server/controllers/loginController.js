const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

//* the variable for  the token
const maxage = 3 * 24 * 60 * 60;
const jwtSecret = process.env.JWT_SECRET;

//* jwt webtoken creation
const createToke = (id, user) => {
  return jwt.sign({ id, user }, jwtSecret, {
    expiresIn: maxage,
  });
};

module.exports.logincontroller = async (req, res) => {
  const { user, password } = req?.body;
  const founderUser = await User.findOne({ username: user });
  if (founderUser) {
    const passOk = bcrypt.compareSync(password, founderUser.password);
    if (!passOk) return res.status(401).json("wrong password");
    const token = createToke(founderUser._id, user);
    res.cookie("jwt", token, { httpOnly: true, maxage: maxage * 1000 });
    res.status(201).json({ user: founderUser._id, nameofuser: user });
  } else {
    res.status(401).json("no user");
  }
};
