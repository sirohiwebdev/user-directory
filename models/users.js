const mongoose = require("./index");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, maxlength: 30 },
  id: { type: mongoose.SchemaTypes.ObjectId },
  contact: { type: String, unique: true, maxlength: 10, required: true },
  address: { type: String, maxlength: 200, required: true },
  email: { type: String, required: true }
});

const User = mongoose.model("User", userSchema);

const getUser = async id => await User.findById(id);
const getAllUser = async () => await User.find();
const addUser = async user => {
  const newUser = User(user);
  return await newUser.save();
};

const updateUser = async (id, userData) =>
  await User.findByIdAndUpdate(id, userData);

const deleteUser = async id => await User.findByIdAndDelete(id);

module.exports = {
  getAllUser,
  getUser,
  updateUser,
  deleteUser,
  addUser
};
