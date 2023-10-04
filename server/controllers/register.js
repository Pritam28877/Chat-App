const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

//* the variable for  the token
const maxage = 3 * 24 * 60 * 60;
const jwtSecret = process.env.JWT_SECRET;
const bcryptSalt = bcrypt.genSaltSync(10);

//* jwt webtoken creation
const createToke = (id, user) => {
  return jwt.sign({ id, user }, jwtSecret, {
    expiresIn: maxage,
  });
};

//* the post action on the user create action
module.exports.register = async (req, res) => {
  try {
    const { user, password } = req?.body;
    const hashedPassword = bcrypt.hashSync(password, bcryptSalt);
    const createdNewUser = await User?.create({
      username: user,
      password: hashedPassword,
    });
    const token = createToke(createdNewUser._id, user);
    res.cookie("jwt", token, { httpOnly: true, maxage: maxage * 1000 });
    res.status(201).json({ user: createdNewUser._id, nameofuser: user });
  } catch (error) {
    console.log(error);
    res.status(400).json("something is wrong");
  }
};
