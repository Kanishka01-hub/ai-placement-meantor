const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  branch: {
    type: String,
    default: "",
  },

  cgpa: {
    type: Number,
    default: 0,
  },

  skills: {
    type: [String],
    default: [],
  },

  projects: {
    type: [String],
    default: [],
  },

  targetCompany: {
    type: String,
    default: "",
  },

  dsaLevel: {
    type: String,
    default: "",
  },

  resumeLink: {
    type: String,
    default: "",
  },

}, {
  timestamps: true,
});

module.exports = mongoose.model("User", userSchema);