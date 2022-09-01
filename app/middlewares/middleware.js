const morgan = require("morgan");
const express = require("express");

const appMiddleware = [morgan("dev"), express.json()];

module.exports = appMiddleware;
