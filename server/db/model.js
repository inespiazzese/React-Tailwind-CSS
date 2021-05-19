const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

userSchema.statics.findUser = async function (email, password) {
  const user = await User.findOne({ email });
  console.log("==========", user);
  if (!user) {
    return;
  }
  const matching = bcrypt.compareSync(password, user.password);
  console.log("matching", matching);
  if (!matching) {
    return;
  } else {
    return user;
  }
};


userSchema.pre("save", function (next) {
  const user = this;
  //this is referring to User
  if (user.isModified("password")) {
    user.password = bcrypt.hashSync(user.password, 8);
  }
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
