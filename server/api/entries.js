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

router.get('/', (req, res, next) => {
  Entry.findAll()
    .then(entries => {
      res.json(entries)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
  console.log('req.body', req.body)
  Entry.create(req.body)
  .then((newEntry) => {
    res.json(newEntry)
  })
  .catch(next)
})