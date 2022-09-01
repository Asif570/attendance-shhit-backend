const errorCheck = (_req, _res, next) => {
  const error = new Error("Resourc Not Found");
  error.status = 404;
  next(error);
};

const errorhanduler = (error, req, res, next) => {
  if (error.status) {
    res.status(error.status).json({
      message: error.message,
    });
  } else {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = [errorCheck, errorhanduler];
