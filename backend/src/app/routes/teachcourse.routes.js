const router = require("express").Router();

const techcoursesInsertMiddleware = require("../middlewares/validations/techcourse/insert");

const techcourseController = require("../controllers/teachcourses.controller");
const schoolSession = require("../middlewares/sessions/school.session");

router.post(
  "/:courseId",
  schoolSession,
  techcoursesInsertMiddleware,
  techcourseController.insert
);

module.exports = router;
