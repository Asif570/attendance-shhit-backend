const express = require("express");
const app = express();

app.use(require("./middlewares/middleware"));

app.get("/health", (_req, res) => {
  res.status(200).json({
    message: "Health is well",
  });
});
app.use(require("./error/apperror"));
module.exports = app;
