const mongoose = require("mongoose");

const teacherschema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  key: String,
  attendanceTime: Date,
});
const teachermodel = new mongoose.model("teachermodel", teacherschema);
module.exports = teachermodel;
