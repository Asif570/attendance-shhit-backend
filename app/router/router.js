const router = require("express").Router();

router.use("/api/teacher/", require("../../routs/teacher"));

module.exports = router;
