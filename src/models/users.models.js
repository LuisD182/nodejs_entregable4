const {DataTypes } = require('Sequelize')
const myDataBase = require('../utilis/database')

const Users = myDataBase.define("users", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING(30),
      unique: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(50),
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstname: {
        type: DataTypes.STRING(30),
        defaultValue: "Bruce",
      },
      lastname: {
        type: DataTypes.STRING(30),
        defaultValue: "Wayne",
      }
    // avatar:{
    //     type: DataTypes.
    // }
  })

  module.exports = Users