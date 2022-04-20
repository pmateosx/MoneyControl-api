const createError = require('http-errors')
const Goal = require('../models/goal.model')

module.exports.create = (req, res, next) => {
    const expense = { name, amount, user } = req.body
    Goal.create(expense)
        .then( expense => res.status(200).json(expense))
        .catch(next)
}

module.exports.detail = (req, res, next) => {
    Goal.findById(req.params.id)
      .then(expense => res.status(200).json(expense))
      .catch(next)
}

  module.exports.update = (req, res, next) => {
    Goal.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(expenseUpdated => {
        res.status(200).json(expenseUpdated)
      })
      .catch(next)
}

module.exports.delete = (req, res, next) => {
    Goal.findByIdAndDelete(req.params.id)
      .then(expense => res.status(202).json(expense))
      .catch(next)
}