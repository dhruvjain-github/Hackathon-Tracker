import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  profilePic: { type: String, default: "defaultProfilePic.png" }, // Ensure a default profile picture is set
  age: { type: Number },
  mobile: { type: String },
  instagram: { type: String },
  github: { type: String }
});

const User = mongoose.model("User", userSchema);

export default User;
