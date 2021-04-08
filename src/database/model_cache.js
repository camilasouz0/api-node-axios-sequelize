const Sequelize = require("sequelize")
const sequelize = require('./db')

const cache = sequelize.define('caches', {
    id: {
        type: Sequelize.INTEGER(11),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    weight_imperial: Sequelize.STRING(6),
    weight_metric: Sequelize.STRING(5),
    name: Sequelize.STRING(50),
    cfa_url: Sequelize.STRING(50),
    vetstreet_url: Sequelize.STRING(50),
    vcahospitals_url: Sequelize.STRING(100),
    temperament: Sequelize.STRING(100),
    origin: Sequelize.STRING(6),
    country_codes: Sequelize.STRING(2),
    country_code: Sequelize.STRING(2),
    description: Sequelize.STRING(999),
    life_span: Sequelize.STRING(20),
    indoor: Sequelize.INTEGER(11),
    lap: Sequelize.INTEGER(11),
    alt_names: Sequelize.STRING(45),
    adaptability: Sequelize.INTEGER(11),
    affection_level: Sequelize.INTEGER(11),
    child_friendly: Sequelize.INTEGER(11),
    dog_friendly: Sequelize.INTEGER(11),
    energy_level: Sequelize.INTEGER(11),
    grooming: Sequelize.INTEGER(11),
    health_issues: Sequelize.INTEGER(11),
    intelligence: Sequelize.INTEGER(11),
    shedding_level: Sequelize.INTEGER(11),
    social_needs: Sequelize.INTEGER(11),
    stranger_friendly: Sequelize.INTEGER(11),
    vocalisation: Sequelize.INTEGER(11),
    experimental: Sequelize.INTEGER(11),
    hairless: Sequelize.INTEGER(11),
    natural: Sequelize.INTEGER(11),
    rare: Sequelize.INTEGER(11),
    rex: Sequelize.INTEGER(11),
    suppressed_tail: Sequelize.INTEGER(11),
    short_legs: Sequelize.INTEGER(11),
    wikipedia_url: Sequelize.STRING(200),
    hypoallergenic: Sequelize.INTEGER(11),
    reference_image_id: Sequelize.STRING(200)
},{
    timestamps: false
})

cache.sync().then(() => {
    console.log('Table caches created')
})

module.exports = cache