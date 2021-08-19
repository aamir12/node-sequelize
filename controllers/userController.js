const db = require("../models");
console.log(db);
const User = db.users;
const add = async (req, res) => {
  console.log(User);
  let data = await User.build({
    name: "Aamir",
    email: "aamir@gmail.com",
    gender: "male",
  });
  await data.save();
  return res.status(200).json({
    status: true,
    message: "Successfully addedd !!",
  });
};

module.exports = {
  add,
};
