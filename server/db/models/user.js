'use strict'
const bcrypt = require('bcryptjs'),
  {
    STRING,
    ARRAY,
    VIRTUAL,
    INTEGER
  } = require('sequelize')
const db = require('../db');  

const User = db.define('users', {

  firstName: {
    type: STRING,
    allowNull: false
  },

  lastName: {
    type: STRING,
    allowNull: false
  },

  email: {
    type: STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
      notEmpty: true
    }
  },

  password_digest: STRING,

  password: VIRTUAL,

  address: STRING,

}, {
  indexes: [{
    fields: ['email'],
    unique: true
  }],
  hooks: {
    beforeCreate: setEmailAndPassword,
    beforeUpdate: setEmailAndPassword,
  },
  defaultScope: {
    attributes: {
      exclude: ['password_digest']
    }
  },
  instanceMethods: {
    // This method is a Promisified bcrypt.compare
    authenticate(plaintext) {
      return bcrypt.compare(plaintext, this.password_digest)
    }
  }
})

function setEmailAndPassword(user) {
  user.email = user.email && user.email.toLowerCase()
  if (!user.password) return Promise.resolve(user)

  return bcrypt.hash(user.get('password'), 10)
    .then(hash => user.set('password_digest', hash))
}

module.exports = User