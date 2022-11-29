const dotENV = require("dotenv");
dotENV.config()

const databaseConfig = () => (
  {
    "development": {
      "username": process.env.DB_USER,
      "password": process.env.DB_PASSWORD,
      "database": process.env.DB_NAME,
      "host": process.env.DB_HOST,
      "dialect": process.env.DB_TYPE
    },
    "test": {
      "username": process.env.DB_USER,
      "password": process.env.DB_PASSWORD,
      "database": process.env.DB_NAME,
      "host": process.env.DB_HOST,
      "dialect": process.env.DB_TYPE
    },
    "production": {
      "username": process.env.DB_USER,
      "password": process.env.DB_PASSWORD,
      "database": process.env.DB_NAME,
      "host": process.env.DB_HOST,
      "dialect": process.env.DB_TYPE
    }
  }
)


module.exports = databaseConfig()
