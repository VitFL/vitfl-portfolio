import mongoose, { Schema } from "mongoose";

const MainContentSchema = new Schema({
  key: {
    type: String,
    required: true,
    unique: true
  },
  value: {
    type: String,
    required: false
  }
});

export default mongoose.model("MainContent", MainContentSchema);
