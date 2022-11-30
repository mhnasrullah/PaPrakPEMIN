const env = require("dotenv");
env.config()

module.exports = {
    "secret": process.env.TOKEN_SECRET,
    "refreshTokenSecret": process.env.TOKEN_SECRET_REFRESH,
    "port": 3000,
    "tokenLife": 60,
    "refreshTokenLife": 120
}