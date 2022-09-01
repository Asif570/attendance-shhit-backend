const mongoose = require("mongoose");

const studentschema = new mongoose.Schema({
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
const studentmodel = new mongoose.model("studentmodel", studentschema);
module.exports = studentmodel;
