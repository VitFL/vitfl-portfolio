const mongoose = require("mongoose");

const { Schema } = mongoose;
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

module.exports = mongoose.model("MainContent", MainContentSchema);
