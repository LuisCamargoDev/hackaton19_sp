const router = require("express").Router();

const studentController = require("../controllers/student.controller");

const preSave = require("../middlewares/preSave");

router.post("/", preSave, studentController.insert);
router.get("/", studentController.show);

module.exports = router;