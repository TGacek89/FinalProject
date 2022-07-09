import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: false,
      // unique: true,
    },
    email: {
      type: String,
      required: false,
      // unique: true,
    },
    password: {
      type: String,
      // required: false,
    },
    profilePic: {
      type: [String],
    },
    isAdmin: {
      type: Boolean,
      // default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
