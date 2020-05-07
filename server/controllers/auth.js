const User = require("../models/user");

exports.signUp = (req, res) => {
  res.json({
    data: "You have hit the sign up API from controller.",
  });
};
