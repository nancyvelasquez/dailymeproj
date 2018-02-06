const Sequelize = require('sequelize');
const db = require('../db');

const Entry = db.define('entry', {
  entryLog: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  myDate: {
    type: Sequelize.STRING,
    allowNull: false,
  }
})

module.exports = Entry