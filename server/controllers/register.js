const User = require("../models/user");
const jwt = require("jsonwebtoken");

//* the variable for  the token
const maxage = 3 * 24 * 60 * 60;
const jwtSecret = process.env.JWT_SECRET;

//* jwt webtoken creation
const createToke = (id) => {
  return jwt.sign({ id }, jwtSecret, {
    expiresIn: maxage,
  });
};

//* the post action on the user create action
module.exports.register = async (req, res) => {
  try {
    const { user, password } = req.body;
    console.log(user, password);
    const createdNewUser = await User.create({ username: user, password });
    const token = createToke(createdNewUser._id);
    res.cookie("jwt", token, { httpOnly: true, maxage: maxage * 1000 });
    res.status(201).json({ user: createdNewUser._id });
  } catch (error) {
    console.log(error);
    res.status(400).json("something is wrong");
  }
};
