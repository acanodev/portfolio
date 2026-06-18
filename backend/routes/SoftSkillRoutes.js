const express = require('express');
const router = express.Router();
const SoftSkillController = require('../controllers/SoftSkillController');

router.get('/', SoftSkillController.getSoftSkills);

module.exports = router;