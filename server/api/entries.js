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

router.get('/:userId/date/:date', (req, res, next) => {
  Entry.findOne({
    where: {
      userId: req.params.userId,
      myDate: req.params.date,
    }
  })
  .then(entry => {
    if(entry) {
      res.json(entry)
    } else {
      res.json({ message: 'No Entry Found'})
    }
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
    .then(entry => {
      if (entry) {
        Entry.update({
          entryLog: req.body.entryLog
        }, {
          where: {
            userId: req.body.userId,
            myDate: req.body.myDate
          },
          returning: true
        })
        .then(updatedEntry => {
          res.json(updatedEntry)
        })
      } else {
        Entry.create(req.body)
        .then(createdEntry => {
          res.status(201).json(createdEntry)
        })
      }
    })
    .catch(next)
})