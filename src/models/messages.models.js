const {DataTypes } = require('Sequelize')
const myDataBase = require('../utilis/database')

const Messages = myDataBase.define( 'Messages', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    conversationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "conversation_id",
    },
    participantId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "participant_id",
    }
} )