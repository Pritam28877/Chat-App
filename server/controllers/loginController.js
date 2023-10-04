const User = require("../models/user");

module.exports.logincontroller = async (req, res) => {
  const { user, password } = req?.body;
  console.log(user, password);
  const founderUser = await User.findOne({ username: user });
  if (founderUser) {
    res.json(founderUser);
  } else {
    res.status(401).json("no user");
  }
};
