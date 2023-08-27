const User = require("../models/user");
const jwt = require("jsonwebtoken");

//* the variable for  the token
const maxage = 3 * 24 * 60 * 60;
const jwtSecret = process.env.JWT_SECRET;

console.log(jwtSecret);

//* jwt webtoken creation
const createToke = (id) => {
  return jwt.sign({ id }, jwtSecret, {
    expiresIn: maxage,
  });
};

//* the post action on the user create action
module.exports.register = async (req, res) => {
  const { user, password } = req.body;
  const createdNewUser = await User.create({ username, password });
  const token = createToke(createdNewUser._id);
};
