const Sequelize = require('sequelize');
const database = require('./db');

const User = database.define('information',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNUll: false
    },
    email: {
        type: Sequelize.STRING,
        allowNUll: false
    }

})

module.exports = User;