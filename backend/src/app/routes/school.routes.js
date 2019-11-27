const router = require("express").Router();

const schoolMiddleware = require('../middlewares/validations/school/insert');

const schoolController = require("../controllers/school.controller");

router.post("/", schoolMiddleware, schoolController.insert);

module.exports = router;