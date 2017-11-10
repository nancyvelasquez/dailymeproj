const router = require('express').Router()
const {User} = require('../db/models')
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
        where: { email: req.body.email }
    })
    .spread((user, created) => {
        if (!created) {
            res.redirect('/login')
        } else {
            console.log('created!')
            res.redirect('/')
        }
    })
    .catch(next)
})
