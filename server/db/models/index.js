const db = require('../db')
const User = require('./user')
const Entry = require('./entry')
// const OAuth = require('./oauth')

Entry.belongsTo(User)
User.hasMany(Entry, { onDelete: 'CASCADE' })

// OAuth.User = User
// OAuth.belongsTo(User)

module.exports = {
  db,
  User,
  Entry
}
