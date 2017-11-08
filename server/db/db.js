const Sequelize = require('sequelize')
const db = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost:5432/dailyme', {
    logging: false,
    operatorsAliases: Sequelize.Op
  }
)
module.exports = db