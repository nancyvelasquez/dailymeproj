const router = require('express').Router()
const { Entry } = require('../db/models')
const {
  mustBeLoggedIn,
  forbidden,
  assertAdmin,
  selfOnly,
  throwError
} = require('./auth.filters')
module.exports = router


// explicitly select only the id and email fields - even though
// users' passwords are encrypted, it won't help if we just
// send everything to anyone who asks!
router.get('/', (req, res, next) => {
  Entry.findAll()
    .then(entries => {
      res.json(entries)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
  Entry.create(req.body)
  .then((newEntry) => {
    res.json(newEntry)
  })
    .catch(next)
})



// // GET /api/users/:userId
// router.get('/:userId', (req, res, next) => {
//   //   const user = User.findById(req.params.userId)
//   //   const carts = Cart.findAll({ where: { user_id: userId }})

//   //   Promise.all([user, carts])
//   //     .then(array => res.json({ user: array[0], carts: array[1]}))
//   //     .catch(next)
//   User.findById(req.params.userId)
//     .then(user => res.json(user))
//     .catch(next)
// })

// // PUT /api/users/:id
// router.put('/:userId', assertAdmin, (req, res, next) => {
//     User.findById(req.params.id)
//         .then(user => {
//             return user.update(req.body)
//         })
//         .then(updatedUser => res.json(updatedUser))
//         .catch(next)
// })

// // DELETE /api/users
// router.delete('/:userId', (req, res, next) => {
//   const id = req.params.userId

//   User.destroy({ where: { id } })
//     .then(() => res.sendStatus(204))
//     .catch(next)
// })