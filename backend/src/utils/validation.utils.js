const Joi = require("joi");
const config = require("../config/config");

class ValidationUtils {
    static signupValidation(data) {
        const schema = Joi.object({
            firstName: Joi.string().required().messages({
                'string.empty': {
                    en: `"First name" is required.`,
                    ru: `Необходимо заполнить поле "Имя".`
                },
                'any.required': {
                    en: `"First name" is required.`,
                    ru: `Необходимо заполнить поле "Имя".`
                }
            }),
            lastName: Joi.string().required().required().messages({
                'string.empty': {
                    en: `"Last name" is required.`,
                    ru: `Необходимо заполнить поле "Фамилия".`
                },
                'any.required': {
                    en: `"Last name" is required.`,
                    ru: `Необходимо заполнить "Имя".`
                }
            }),
            email: Joi.string().min(6).required().email()
                .messages({
                    'string.empty': {
                        en: `"E-mail" is required`,
                        ru: `Необходимо заполнить поле "E-mail".`
                    },
                    'string.email': {
                        en: `"Email" is incorrect.`,
                        ru: `"E-mail" неверный.`
                    },
                    'string.min': {
                        en: `"Email" is incorrect.`,
                        ru: `"E-mail" неверный.`
                    },
                    'any.required': {
                        en: `"E-mail" is required`,
                        ru: `Необходимо заполнить поле "E-mail".`
                    }
                }),
            password: Joi.string().min(8).required()
                .messages({
                    'string.empty': {
                        en: `"Password" is required.`,
                        ru: `Необходимо заполнить поле "Пароль."`
                    },
                    'string.min': {
                        en: `The "password" must have a minimum of 8 characters.`,
                        ru: `"Пароль" должен иметь минимум 8 символов.`
                    },
                    'any.required': {
                        en: `"Password" is required.`,
                        ru: `Необходимо заполнить поле "Пароль."`
                    }
                }),
            confirmPassword: Joi.any().equal(Joi.ref('password')).required()
                .messages({
                    'any.only': {
                        en: `Both passwords must match.`,
                        ru: `Оба пароля должны совпадать.`
                    }
                }),
            agree: Joi.boolean().default(true)
        });
        return schema.validate(data);
    }

    static loginValidation(data) {
        const schema = Joi.object({
            email: Joi.string().min(6).required().email()
                .messages({
                    'string.empty': {
                        en: `"E-mail" is required.`,
                        ru: `Необходимо заполнить поле "E-mail".`
                    },
                    'string.email': {
                        en: `"Email" is incorrect.`,
                        ru: `"E-mail" неверный.`,
                    },
                    'string.min': {
                        en: `"Email" is incorrect.`,
                        ru: `"E-mail" неверный.`
                    },
                    'any.required': {
                        en: `"E-mail" is required.`,
                        ru: `Необходимо заполнить поле "E-mail".`
                    }
                }),
            password: Joi.string().min(8).required()
                .messages({
                    'string.empty': {
                        en: `"Password" is required.`,
                        ru: `Необходимо заполнить поле "Пароль".`,
                    },
                    'string.min': {
                        en: ``,
                        ru: `"Пароль" должен иметь минимум 8 символов.`,
                    },
                    'any.required': {
                        en: `"Password" is required`,
                        ru: `Необходимо заполнить поле "Пароль".`
                    }
                }),
            rememberMe: Joi.boolean().default(false),
        });
        return schema.validate(data);
    }

    static refreshTokenValidation(data) {
        const schema = Joi.object({
            refreshToken: Joi.string().required()
                .messages({
                    'string.empty': `Необходимо заполнить "Токен"`,
                    'any.required': `Необходимо заполнить "Токен"`
                }),
        });
        return schema.validate(data);
    }

    static contactValidation(data) {
        const schema = Joi.object({
            email: Joi.string().min(6).required().email()
                .messages({
                    'string.empty': {
                        en: `"E-mail" is required`,
                        ru: `Необходимо заполнить поле "E-mail".`
                    },
                    'string.email': {
                        en: `"Email" is incorrect.`,
                        ru: `"E-mail" неверный.`,
                    },
                    'string.min': {
                        en: `"Email" is incorrect.`,
                        ru: `"E-mail" неверный.`
                    },
                    'any.required': {
                        en: `"E-mail" is required.`,
                        ru: `Необходимо заполнить поле "E-mail."`
                    }
                }),
            subject: Joi.string().required().messages({
                'string.empty': {
                    en: `"Subject" is required.`,
                    ru: `Необходимо заполнить поле "Тема вопроса".`
                },
                'any.required': {
                    en: `"Subject" is required.`,
                    ru: `Необходимо заполнить "Тема вопроса".`
                }
            }),
            message: Joi.string().required().messages({
                'string.empty': {
                    en: `"Your message" is required.`,
                    ru: `Необходимо заполнить поле "Ваше сообщение".`
                },
                'any.required': {
                    en: `"Your message" is required.`,
                    ru: `Необходимо заполнить "Ваше сообщение".`
                }
            }),
        });
        return schema.validate(data);
    }
}

module.exports = ValidationUtils;
