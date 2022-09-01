const mongoose = require("mongoose");

const attendancemodel = new mongoose.Schema({
  studentId: String,
  name: String,
  status: {
    type: String,
    default: "Present",
  },
});

module.exports = attendancemodel;
