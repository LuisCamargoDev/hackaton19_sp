const router = require("express").Router();

const techcoursesInsertMiddleware = require("../middlewares/validations/techcourse/insert");

const techcourseController = require("../controllers/teachcourses.controller");

router.post("/:courseId", techcoursesInsertMiddleware, techcourseController.insert);

module.exports = router;
