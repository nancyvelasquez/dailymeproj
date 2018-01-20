const db = require('../db')
const User = require('./user')
const Entry = require('./entry')

User.hasMany(Entry, { onDelete: 'CASCADE' })
Entry.belongsTo(User)

module.exports = {
  db,
  User,
  Entry
}
