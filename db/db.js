const mongose = require("mongoose");
const DB = (uri) => {
  mongose
    .connect(uri, { serverSelectionTimeoutMS: 1000 })
    .then(() => {
      console.log("connected");
    })
    .catch((error) => {
      console.error(error);
    });
};
module.exports = DB;
