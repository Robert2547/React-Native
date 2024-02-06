import mongoose from "mongoose";

const { Schema } = mongoose;

// Create Schema, schema is a blueprint of the data that we want to store in the database
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
      max: 64,
    },
    role: {
      type: String,
      default: "subscriber",
    },
    image: {
      public_id: "",
      url: "",
    },
    resetCode: "",
  },

  { timestamps: true }
);

export default mongoose.model("User", userSchema);
