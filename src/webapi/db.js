const Sequelize = require('sequelize');
const sequelize = new Sequelize('Login','sa','ricardo93', {
    dialect: 'mssql',
    host: 'localhost',
    port : "49699",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})


module.exports = sequelize;