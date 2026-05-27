const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },

  email: {
    type: String,
    unique: true,
  },

  password: {
    type: String,
  },

  branch: {
    type: String,
  },

  cgpa: {
    type: String,
  },

  skills: {
    type: [String],
  },

  targetCompany: {
    type: String,
  },

  dsaLevel: {
    type: String,
  },

  resumeLink: {
    type: String,
  },
});

module.exports = mongoose.model("User", userSchema);