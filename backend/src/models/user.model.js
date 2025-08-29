import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    profilePic: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);
export default User;
// This code defines a Mongoose schema for a User model in a Node.js application.
// The schema includes fields for full name, password, email, and profile picture,
// with validation rules such as required fields and unique email.
