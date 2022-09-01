const mongoose = require("mongoose");

const attendanceschema = new mongoose.Schema({
  studentId: String,
  username: String,
  status: {
    type: String,
    default: "Present",
  },
});
const attendancemodel = new mongoose.model("attendancemodel", attendanceschema);
module.exports = attendancemodel;
