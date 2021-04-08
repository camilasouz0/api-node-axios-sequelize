const Sequelize = require("sequelize")
const sequelize = require('./db')

const tokenjwt = sequelize.define('tokens', {
    id: {
        type: Sequelize.INTEGER(11),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    token: Sequelize.STRING(999),
},{
    timestamps: false
})

tokenjwt.sync().then(() => {
    console.log('Table tokens created')
})

module.exports = tokenjwt