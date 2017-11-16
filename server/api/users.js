const router = require('express').Router()
const {User} = require('../db/models')
const {mustBeLoggedIn, forbidden, assertAdmin, selfOnly, throwError} = require('./auth.filters')
module.exports = router

router.get('/', (req, res, next) => {
  User.findAll({
    // explicitly select only the id and email fields - even though
    // users' passwords are encrypted, it won't help if we just
    // send everything to anyone who asks!
    attributes: ['id', 'email']
  })
    .then(users => {
        console.log('got users')
        res.json(users)
    })
    .catch(next)
})

router.post('/signup', (req, res, next) => {
    User.findOrCreate({
        where: { email: req.body.email }, 
        defaults: req.body,
    })
    .spread((user, created) => {
        if (!created) {
            res.redirect('/login')
        } else {
            res.redirect('/')
        }
    })
    .catch(next)
})
