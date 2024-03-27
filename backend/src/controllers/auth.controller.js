const ValidationUtils = require("../utils/validation.utils");
const TokenUtils = require("../utils/token.utils");
const UserModel = require('../models/user.model');

class AuthController {
    static async signUp(req, res) {
        try {
            const {error} = ValidationUtils.signupValidation(req.body);

            if (error) {
                return res.status(400).json({error: true, message: error.details[0].message});
            }

            let user = await UserModel.findOne({email: req.body.email});
            if (user) {
                return res.status(400).json({
                    error: true, message: {
                        en: "The user with this email already exists.",
                        ru: "Пользователь с таким E-mail уже существует."
                    }
                });
            }

            let userObject = Object.assign({}, req.body);
            delete userObject.password;
            delete userObject.confirmPassword;
            delete userObject.agree;

            user = new UserModel(userObject);
            user.setPassword(req.body.password);
            const {accessToken, refreshToken} = await TokenUtils.generateTokens(user, req.body.rememberMe);
            user.refreshToken = refreshToken;

            user.userStatus.en = 'author';
            user.userStatus.ru = 'автор';
            user.isAdmin = false;
            user.status = { isActivated: true,  isBlocked: false};

            await user.save();

            res.status(201).json({
                error: false,
                message: {
                    en: "The user has been successfully registered.",
                    ru: "Пользователь был успешно зарегистрирован."
                },
                userId: user._id,
                accessToken,
                refreshToken
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

    static async login(req, res) {
        try {
            const {error} = ValidationUtils.loginValidation(req.body);

            if (error) {
                return res.status(400).json({error: true, message: error.details[0].message});
            }

            const user = await UserModel.findOne({email: req.body.email});
            if (!user) {
                return res.status(401).json({
                    error: true, message: {
                        en: "The user is not found.",
                        ru: "Пользователь не найден."
                    }
                });
            }

            if (!user.status.isActivated && user.status.isBlocked) {
                return res.status(401).json({
                    error: true, message: {
                        en: "Access blocked. To unlock access, contact the site administration.",
                        ru: "Доступ заблокирован. Для разблокировки доступа обратись к администрации сайта."
                    }
                });
            }

            if (!user.checkPassword(req.body.password)) {
                return res.status(401).json({
                    error: true,
                    message: {
                        en: "Incorrect email or password.",
                        ru: "Неправильный E-mail или пароль."
                    }
                });
            }

            const {accessToken, refreshToken} = await TokenUtils.generateTokens(user, req.body.rememberMe);

            user.refreshToken = refreshToken;
            await user.save();

            res.status(200).json({
                error: false,
                message: {
                    en: "Login completed successfully.",
                    ru: "Вход выполнен успешно."
                },
                userId: user._id,
                accessToken,
                refreshToken,
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

    static async refresh(req, res) {
        const {error} = ValidationUtils.refreshTokenValidation(req.body);
        if (error) {
            return res.status(400).json({error: true, message: error.details[0].message});
        }

        try {
            const {tokenDetails} = await TokenUtils.verifyRefreshToken(req.body.refreshToken);
            const user = await UserModel.findOne({email: tokenDetails.email});
            const {accessToken, refreshToken} = await TokenUtils.generateTokens(user);
            user.refreshToken = refreshToken;
            await user.save();

            res.status(200).json({
                userId: user._id,
                accessToken,
                refreshToken
            });
        } catch (e) {
            return res.status(400).json({
                error: true,
                message: e.message,
            });
        }
    }

    static async logout(req, res) {
        try {
            const {error} = ValidationUtils.refreshTokenValidation(req.body);
            if (error) {
                return res.status(400).json({error: true, message: error.details[0].message});
            }
            const user = await UserModel.findOne({refreshToken: req.body.refreshToken});
            if (!user) {
                return res.status(404).json({
                    error: true,
                    message: {
                        en: "The User does not exist.",
                        ru: "Пользователя не существует."
                    }
                });
            }
            user.refreshToken = null;
            await user.save();
            res.status(200).json({
                error: false,
                message: {
                    en: "Logged out successfully.",
                    ru: "Выход из системы выполнен успешно."
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

module.exports = AuthController;
