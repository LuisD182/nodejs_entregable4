const {sequelize, Sequelize} = require('sequelize')
const myDataBase = new Sequelize({
    database: 'entregable_4',
    port: 5432,
    host: 'localhost',
    username: 'postgres',
    password: 'ruut',
    dialect: 'postgres'
})

module.exports = myDataBase;