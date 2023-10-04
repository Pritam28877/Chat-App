module.exports.logincontroller = async (req, res) => {
  const { user, password } = req?.body;
  console.log(user, password);
};
