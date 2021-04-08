module.exports = {
    host: "localhost",
    username: "root",
    password: "admin",
    database: "cache",
    dialect: "mysql",
    define: {
      timestamps: true,
      underscored: true,
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }