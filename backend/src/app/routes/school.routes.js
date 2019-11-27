const router = require("express").Router();

const schoolInsertMiddleware = require('../middlewares/validations/school/insert');
const courseInsertMiddleware = require("../middlewares/validations/course/insert");

const schoolController = require("../controllers/school.controller");
const courseController = require("../controllers/course.controller");

router.post("/", schoolInsertMiddleware, schoolController.insert);
router.get("/", schoolController.show);

router.post("/courses", courseInsertMiddleware, courseController.insert);
router.post("/session", schoolController.session);
module.exports = router;