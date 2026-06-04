const express = require('express');
const router = express.Router();
const ContactMessageController = require('../controllers/ContactMessageController');

router.post('/', ContactMessageController.sendMessage);

module.exports = router;