const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and schema for Hero
let Hero = new Schema(
  {
    headerFirst: {
      type: String,
      required: true
    },
    headerSecond: {
      type: String,
      required: true
    },
    slogan: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  {
    collection: "hero"
  }
);

module.exports = mongoose.model("Hero", Hero);
