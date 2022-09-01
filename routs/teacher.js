const teachermodel = require("../db/models/teachermodel");

const router = require("express").Router();

router.post("/register", async (req, res) => {
  const newteacher = new teachermodel(req.body);
  newteacher.save((error) => {
    if (error) {
      res.status(501).json({
        error: "Saving faild",
      });
    } else {
      res.status(201).json({
        message: "done",
      });
    }
  });
});
router.get("/", async (req, res) => {
  const teacher = await teachermodel.find();
  res.status(200).json(teacher);
});
module.exports = router;
