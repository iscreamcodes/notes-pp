import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,        // No two users can have the same email
    lowercase: true
  },
  password: {
    type: String,
    required: true       // (You’ll hash this later before saving)
  },
  role: {
    type: String,
    enum: ["member", "admin"],
    default: "member"
  }
});

const User = mongoose.model("User", userSchema);

export default User;
