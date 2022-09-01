const mongoose = require("mongoose");

const teachermodel = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  key: String,
  attendanceTime: Date(),
});

module.exports = teachermodel;
