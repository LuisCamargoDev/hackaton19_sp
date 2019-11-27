const router = require("express").Router();

const schoolInsertMiddleware = require('../middlewares/validations/school/insert');

const schoolController = require("../controllers/school.controller");

router.post("/", schoolInsertMiddleware, schoolController.insert);
router.get("/", schoolController.show);

module.exports = router;