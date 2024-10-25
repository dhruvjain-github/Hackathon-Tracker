import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  // profilePic: {
  //   type: String,
  //   default: "defaultProfilePic.png" // Set a default profile picture path
  // }
});

const User = mongoose.model("user", userSchema);

export default User;
