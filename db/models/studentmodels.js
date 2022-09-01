const mongoose = require("mongoose");

const studentmodel = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  status: {
    type: String,
    default: "pending",
  },
  attendanceability: {
    type: Boolean,
    default: false,
  },
});

module.exports = studentmodel;
