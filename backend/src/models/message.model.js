const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    id: String,
    email: {type: String, required: true},
    subject: {type: String, required: true},
    message: {type: String, required: true},
});

const MessageModel = mongoose.model('Message', MessageSchema);

module.exports = MessageModel;
