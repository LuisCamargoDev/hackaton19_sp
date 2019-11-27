const router = require("express").Router();

const studentController = require("../controllers/student.controller");

router.post("/", studentController.insert);
router.get("/", studentController.show);
router.post("/session", studentController.session);
module.exports = router;
