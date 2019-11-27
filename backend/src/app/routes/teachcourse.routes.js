const router = require("express").Router();

const techcoursesInsertMiddleware = require("../middlewares/validations/techcourse/insert");

const teachcoursesController = require("../controllers/teachcourses.controller");

router.post("/:courseId", techcoursesInsertMiddleware, teachcoursesController.insert);
router.get("/", teachcoursesController.index);

module.exports = router;
