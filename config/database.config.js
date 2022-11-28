const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize("papemin", "root", "", {
//     host: 'localhost',
//     dialect: "mysql" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
// });

const instanceORM = () => {

    const dbConfig = {
        name : process.env.DB_NAME,
        user : process.env.DB_USER,
        password : process.env.DB_PASSWORD,
    }

    return new Sequelize(dbConfig.name, dbConfig.user, dbConfig.password, {
            host: 'localhost',
            dialect: "mysql" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
        });
}

module.exports={
    ORM : instanceORM,
}
