const config = {
    secret: '9238fSf9fAKckj332Knaksnf9012ADSN',
    env: process.env.ENV,
    port: 5000,
    userCommentActions: {
        like: 'like',
        dislike: 'dislike',
        violate: 'violate',
    },
};

module.exports = config;
