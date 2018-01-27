const router = require('express').Router()
const {
  Entry
} = require('../db/models')
const {
  mustBeLoggedIn,
  forbidden,
  assertAdmin,
  selfOnly,
  throwError
} = require('./auth.filters')
module.exports = router

router.get('/', (req, res, next) => {
  Entry.findAll()
    .then(entries => {
      res.json(entries)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
  Entry.findOne({
      where: {
        userId: req.body.userId,
        myDate: req.body.myDate,
      },
    })
    .then(found => {
      if(!found) {
        Entry.create(req.body)
        .then(([user, created]) => {
          console.log('created', user, created)
          res.json(user)
        })
      } else {
        res.json(found)
      } 
    })
    .catch(next)
})




// Order.findOrCreate({
//   where: {
//     user_id: +req.body.user,
//     status: 'notOrdered'
//   },
//   defaults: {
//     user_id: +req.body.user,
//     status: 'notOrdered'
//   }
// })

// .then(([order, created]) => {
//   console.log('Order ', order, 'This was created ', created)
//   if (!created) {
//     return res.json(order)
//   } else {
//     return res.status(201).json(order)
//   }
// })

//   .catch(next)
// }