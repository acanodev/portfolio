const express = require('express');
const router = express.Router();
const ExperienceController = require('../controllers/ExperienceController');

router.get("/", ExperienceController.getExperience);

module.exports = router;