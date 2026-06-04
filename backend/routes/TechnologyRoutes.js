const express = require("express");
const router = express.Router();
const TechnologyController = require("../controllers/TechnologyController");

router.get("/", TechnologyController.getTechnologies);
router.get("/:category", TechnologyController.getTechnologies);

module.exports = router;
