const router = require("express").Router();

const coachInsertMiddleware = require("../middlewares/validations/coach/insert");

const coachController = require("../controllers/coach.controller");

router.post("/", coachInsertMiddleware, coachController.insert);
router.post("/session", coachController.session);

module.exports = router;
