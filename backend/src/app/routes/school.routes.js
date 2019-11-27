const router = require("express").Router();

const schoolController = require("../controllers/school.controller");

const preSave = require('../middlewares/preSave');

router.post("/", preSave, schoolController.insert);
router.get("/:id/rooms", schoolController.show);

module.exports = router;