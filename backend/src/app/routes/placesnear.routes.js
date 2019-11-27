const router = require("express").Router();

const placesnearController = require("../controllers/placesnear.controller");

router.get("/", placesnearController.index);

module.exports = router;