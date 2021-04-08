const config = require("../config/configs")

const Sequelize = require("sequelize")
const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
  operatorsAliases: 0,

  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle
  }
})

sequelize.authenticate().then(() => {
    console.log('\nConectado com sucesso!\n')
}).catch(err => {
    console.error('Não foi possivel estabelecer conexão', err)
}).finally(() => {
    console.log('OK!')
})

module.exports = sequelize