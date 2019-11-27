const router = require("express").Router();

const placesnearController = require("../controllers/placesnear.controller");
const coachSession = require("../middlewares/sessions/coach.session");

router.get("/", coachSession, placesnearController.index);

module.exports = router;
