const ValidationUtils = require("../utils/validation.utils");
const MessageModel = require('../models/message.model');


class ContactController {
    static async contactUs(req, res) {
        try {
            const {error} = ValidationUtils.contactValidation(req.body);
            if (error) {
                return res.status(400).json({error: true, message: error.details[0].message});
            }
            let messageObject = Object.assign({}, req.body);
            const message = new MessageModel(messageObject);
            await message.save();

            res.status(200).json({
                error: false,
                message: {
                    en: "Your message has been received. We will give you an answer shortly.",
                    ru: "Ваше сообщение получено. В ближайшее время мы дадим Вам ответ."
                }
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({
                error: true,
                message: {
                    en: "Internal Server Error",
                    ru: "Внутренняя ошибка сервера."
                }
            });
        }
    }
}

module.exports = ContactController;
