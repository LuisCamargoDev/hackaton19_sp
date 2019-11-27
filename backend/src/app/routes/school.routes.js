const router = require("express").Router();

const schoolController = require("../controllers/school.controller");

router.post("/", schoolController.insert);

module.exports = router;