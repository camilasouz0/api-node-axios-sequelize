'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tokens', { 
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false 
      },
      token: Sequelize.TEXT
    }).then(() => {
      console.log('Table tokens created')
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tokens')
  }
};
