const router = require("express").Router();

const coachInsertMiddleware = require('../middlewares/validations/coach/insert')

const coachController = require("../controllers/coach.controller");

router.get("/",)
router.post("/", coachInsertMiddleware, coachController.insert);

module.exports = router;

