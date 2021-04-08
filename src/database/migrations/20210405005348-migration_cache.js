'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('caches', {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false
      },
      weight_imperial: Sequelize.STRING,
      weight_metric: Sequelize.STRING,
      name: Sequelize.STRING,
      cfa_url: Sequelize.TEXT,
      vetstreet_url: Sequelize.TEXT,
      vcahospitals_url: Sequelize.TEXT,
      temperament: Sequelize.STRING,
      origin: Sequelize.STRING,
      country_codes: Sequelize.STRING,
      country_code: Sequelize.STRING,
      description: Sequelize.TEXT,
      life_span: Sequelize.STRING,
      indoor: Sequelize.INTEGER,
      lap: Sequelize.INTEGER,
      alt_names: Sequelize.STRING,
      adaptability: Sequelize.INTEGER,
      affection_level: Sequelize.INTEGER,
      child_friendly: Sequelize.INTEGER,
      dog_friendly: Sequelize.INTEGER,
      energy_level: Sequelize.INTEGER,
      grooming: Sequelize.INTEGER,
      health_issues: Sequelize.INTEGER,
      intelligence: Sequelize.INTEGER,
      shedding_level: Sequelize.INTEGER,
      social_needs: Sequelize.INTEGER,
      stranger_friendly: Sequelize.INTEGER,
      vocalisation: Sequelize.INTEGER,
      experimental: Sequelize.INTEGER,
      hairless: Sequelize.INTEGER,
      natural: Sequelize.INTEGER,
      rare: Sequelize.INTEGER,
      rex: Sequelize.INTEGER,
      suppressed_tail: Sequelize.INTEGER,
      short_legs: Sequelize.INTEGER,
      wikipedia_url: Sequelize.TEXT,
      hypoallergenic: Sequelize.INTEGER,
      reference_image_id: Sequelize.STRING
    }).then(() => {
      console.log('Table cache created')
    })
     
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('caches')
     
  }
};
