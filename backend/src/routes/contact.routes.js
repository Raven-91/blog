const ContactController = require('../controllers/contact.controller');
const express = require('express');

const router = express.Router();

router.post("/contact", ContactController.contactUs);

module.exports = router;
